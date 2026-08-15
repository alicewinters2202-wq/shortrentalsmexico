import { Injectable, BadRequestException } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || '',
);

export interface PropertyReview {
  id: number;
  slug: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
}

export interface NewReview {
  name: string;
  rating: number;
  comment: string;
}

function mapRow(row: Record<string, unknown>): PropertyReview {
  return {
    id: row.id as number,
    slug: row.slug as string,
    name: row.name as string,
    rating: row.rating as number,
    comment: row.comment as string,
    createdAt: row.created_at as string,
    approved: !!row.approved,
  };
}

@Injectable()
export class ReviewsService {
  /** Public: only approved reviews for a property */
  async getByProperty(slug: string): Promise<PropertyReview[]> {
    const { data } = await supabase
      .from('property_reviews')
      .select('*')
      .eq('slug', slug)
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (!data) return [];
    return data.map(mapRow);
  }

  /** Admin: all reviews for a property, approved and pending */
  async getAllByProperty(slug: string): Promise<PropertyReview[]> {
    const { data } = await supabase
      .from('property_reviews')
      .select('*')
      .eq('slug', slug)
      .order('created_at', { ascending: false });

    if (!data) return [];
    return data.map(mapRow);
  }

  private validate(input: NewReview) {
    const rating = Math.round(Number(input.rating));
    const name = String(input.name || '').trim().slice(0, 80);
    const comment = String(input.comment || '').trim().slice(0, 2000);

    if (!rating || rating < 1 || rating > 5) {
      throw new BadRequestException('rating must be between 1 and 5');
    }
    if (!comment) {
      throw new BadRequestException('comment is required');
    }
    return { rating, name: name || 'Anónimo', comment };
  }

  /** Public submission: goes in as pending, not visible until approved */
  async submitPublic(slug: string, input: NewReview): Promise<PropertyReview> {
    const { rating, name, comment } = this.validate(input);

    const { data, error } = await supabase
      .from('property_reviews')
      .insert({ slug, name, rating, comment, approved: false })
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(error?.message || 'Could not save review');
    }
    return mapRow(data);
  }

  /** Admin-authored: goes live immediately */
  async create(slug: string, input: NewReview): Promise<PropertyReview> {
    const { rating, name, comment } = this.validate(input);

    const { data, error } = await supabase
      .from('property_reviews')
      .insert({ slug, name, rating, comment, approved: true })
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(error?.message || 'Could not save review');
    }
    return mapRow(data);
  }

  async approve(id: number): Promise<void> {
    await supabase.from('property_reviews').update({ approved: true }).eq('id', id);
  }

  async delete(id: number): Promise<void> {
    await supabase.from('property_reviews').delete().eq('id', id);
  }
}
