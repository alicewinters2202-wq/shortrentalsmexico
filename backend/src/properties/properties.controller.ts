import { Controller, Get, Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getAll() {
    return this.propertiesService.getPreview();
  }

  @Get('preview')
  getPreview() {
    return this.propertiesService.getPreview();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertiesService.getOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.propertiesService.remove(id);
  }

  @Post('randomize-availability')
  randomizeAvailability() {
    return this.propertiesService.randomizeAvailability();
  }
}