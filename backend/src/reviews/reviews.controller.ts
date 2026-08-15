import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewsService, NewReview } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':slug')
  async getByProperty(@Param('slug') slug: string) {
    return this.reviewsService.getByProperty(slug);
  }

  @Post(':slug')
  async submit(@Param('slug') slug: string, @Body() body: NewReview) {
    return this.reviewsService.submitPublic(slug, body);
  }
}
