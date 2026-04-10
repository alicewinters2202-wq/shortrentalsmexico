import { Controller, Get, Post, Body, Param, ParseIntPipe, Headers, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PropertiesService } from '../properties/properties.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly propertiesService: PropertiesService,
  ) {}

  private checkAuth(headers: Record<string, string>) {
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    const auth = headers['x-admin-password'];
    if (auth !== password) throw new UnauthorizedException();
  }

  @Get('properties')
  getProperties(@Headers() headers: Record<string, string>) {
    this.checkAuth(headers);
    const properties = this.propertiesService.getPreview();
    const overrides = this.adminService.getOverrides();
    return properties.map(p => ({
      ...p,
      override: overrides[String(p.id)] || null,
    }));
  }

  @Post('properties/:id')
  updateProperty(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { available?: boolean; availableFrom?: string | null; pricePerMonth?: number },
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    this.adminService.setOverride(id, body);
    return { success: true };
  }

  @Post('properties/:id/clear')
  clearOverride(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    this.adminService.clearOverride(id);
    return { success: true };
  }
}
