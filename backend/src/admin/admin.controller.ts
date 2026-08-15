import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Headers, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PropertiesService } from '../properties/properties.service';
import { ReviewsService, NewReview } from '../reviews/reviews.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly propertiesService: PropertiesService,
    private readonly reviewsService: ReviewsService,
  ) {}

  private checkAuth(headers: Record<string, string>) {
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    const auth = headers['x-admin-password'];
    if (auth !== password) throw new UnauthorizedException();
  }

  @Get('properties')
  async getProperties(@Headers() headers: Record<string, string>) {
    this.checkAuth(headers);
    const properties = this.propertiesService.getPreview();
    const overrides = await this.adminService.getOverrides();
    return properties.map(p => {
      const o = overrides[String(p.id)];
      return {
        ...p,
        available: o?.available !== undefined ? o.available : p.available,
        availableFrom: o?.availableFrom !== undefined ? o.availableFrom : p.availableFrom,
        occupiedSince: o?.occupiedSince !== undefined ? o.occupiedSince : p.occupiedSince,
        pricePerMonth: o?.pricePerMonth !== undefined ? o.pricePerMonth : p.pricePerMonth,
        override: o || null,
      };
    });
  }

  @Post('properties/:id')
  async updateProperty(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { available?: boolean; availableFrom?: string | null; occupiedSince?: string | null; pricePerMonth?: number },
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    await this.adminService.setOverride(id, body);
    return { success: true };
  }

  @Post('properties/:id/clear')
  async clearOverride(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    await this.adminService.clearOverride(id);
    return { success: true };
  }

  @Get('reviews/:slug')
  async getReviews(
    @Param('slug') slug: string,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    return this.reviewsService.getAllByProperty(slug);
  }

  @Post('reviews/:slug')
  async createReview(
    @Param('slug') slug: string,
    @Body() body: NewReview,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    return this.reviewsService.create(slug, body);
  }

  @Post('reviews/:id/approve')
  async approveReview(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    await this.reviewsService.approve(id);
    return { success: true };
  }

  @Delete('reviews/:id')
  async deleteReview(
    @Param('id', ParseIntPipe) id: number,
    @Headers() headers: Record<string, string>,
  ) {
    this.checkAuth(headers);
    await this.reviewsService.delete(id);
    return { success: true };
  }
}
