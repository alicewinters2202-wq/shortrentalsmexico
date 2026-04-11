import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PropertiesService } from '../properties/properties.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PropertiesService],
  exports: [AdminService],
})
export class AdminModule {}
