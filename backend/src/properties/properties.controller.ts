import { Controller, Get, Post, Delete, Param, ParseIntPipe, Res } from '@nestjs/common';
import { Response } from 'express';
import { PropertiesService } from './properties.service';
import { AdminService } from '../admin/admin.service';

@Controller('properties')
export class PropertiesController {
  constructor(
    private readonly propertiesService: PropertiesService,
    private readonly adminService: AdminService,
  ) {}

  @Get()
  getAll() {
    return this.propertiesService.getPreview();
  }

  @Get('preview')
  async getPreview(@Res() res: Response) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.set('CDN-Cache-Control', 'no-store');
    res.set('Vercel-CDN-Cache-Control', 'no-store');
    const properties = this.propertiesService.getPreview();
    const overrides = await this.adminService.getOverrides();
    const result = properties.map(p => {
      const o = overrides[String(p.id)];
      if (!o) return p;
      return {
        ...p,
        available: o.available !== undefined ? o.available : p.available,
        availableFrom: o.availableFrom !== undefined ? o.availableFrom : p.availableFrom,
        occupiedSince: o.occupiedSince !== undefined ? o.occupiedSince : p.occupiedSince,
        pricePerMonth: o.pricePerMonth !== undefined ? o.pricePerMonth : p.pricePerMonth,
      };
    });
    return res.json(result);
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
