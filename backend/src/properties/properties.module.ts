import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { AdminService } from '../admin/admin.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, AdminService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
