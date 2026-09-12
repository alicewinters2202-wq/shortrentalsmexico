import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PropertiesService } from '../properties/properties.service';
import { ReviewsService } from '../reviews/reviews.service';
import { GeocodingService } from '../properties/geocoding.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PropertiesService, ReviewsService, GeocodingService],
  exports: [AdminService],
})
export class AdminModule {}
