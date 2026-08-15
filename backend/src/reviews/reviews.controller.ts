import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':slug')
  async getByProperty(@Param('slug') slug: string) {
    return this.reviewsService.getByProperty(slug);
  }
}
