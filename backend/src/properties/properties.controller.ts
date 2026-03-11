import { Controller, Get, Post } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get('preview')
  getPreview() {
    return this.propertiesService.getPreview();
  }

  @Post('randomize-availability')
  randomizeAvailability() {
    return this.propertiesService.randomizeAvailability();
  }
}
