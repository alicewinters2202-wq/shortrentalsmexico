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
}

export interface NewReview {
  name: string;
  rating: number;
  comment: string;
}

@Injectable()
export class ReviewsService {
  async getByProperty(slug: string): Promise<PropertyReview[]> {
    const { data } = await supabase
      .from('property_reviews')
      .select('*')
      .eq('slug', slug)
      .order('created_at', { ascending: false });

    if (!data) return [];

    return data.map((row) => ({
      id: row.id,
      slug: row.slug,
      name: row.name,
      rating: row.rating,
      comment: row.comment,
      createdAt: row.created_at,
    }));
  }

  async create(slug: string, input: NewReview): Promise<PropertyReview> {
    const rating = Math.round(Number(input.rating));
    const name = String(input.name || '').trim().slice(0, 80);
    const comment = String(input.comment || '').trim().slice(0, 2000);

    if (!rating || rating < 1 || rating > 5) {
      throw new BadRequestException('rating must be between 1 and 5');
    }
    if (!comment) {
      throw new BadRequestException('comment is required');
    }

    const { data, error } = await supabase
      .from('property_reviews')
      .insert({
        slug,
        name: name || 'Anónimo',
        rating,
        comment,
      })
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(error?.message || 'Could not save review');
    }

    return {
      id: data.id,
      slug: data.slug,
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      createdAt: data.created_at,
    };
  }

  async delete(id: number): Promise<void> {
    await supabase.from('property_reviews').delete().eq('id', id);
  }
}
