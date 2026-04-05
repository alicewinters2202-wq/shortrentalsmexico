import { Controller, Get, Post, Delete, Param, ParseIntPipe, Res } from '@nestjs/common';
import { Response } from 'express';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getAll() {
    return this.propertiesService.getPreview();
  }

  @Get('preview')
  getPreview(@Res() res: Response) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.set('CDN-Cache-Control', 'no-store');
    res.set('Vercel-CDN-Cache-Control', 'no-store');
    res.json(this.propertiesService.getPreview());
  }