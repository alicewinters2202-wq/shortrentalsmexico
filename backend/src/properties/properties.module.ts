import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { AdminService } from '../admin/admin.service';
import { GeocodingService } from './geocoding.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, AdminService, GeocodingService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
