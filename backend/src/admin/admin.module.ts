import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PropertiesService } from '../properties/properties.service';
import { ReviewsService } from '../reviews/reviews.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PropertiesService, ReviewsService],
  exports: [AdminService],
})
export class AdminModule {}
