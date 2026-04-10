import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { ImagesModule } from './images/images.module';
import { BookingsModule } from './bookings/bookings.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CitiesModule } from './cities/cities.module';
import { ContactModule } from './contact/contact.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...(process.env.DB_HOST
      ? [
          TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
              type: 'postgres',
              host: config.get('DB_HOST'),
              port: config.get<number>('DB_PORT'),
              username: config.get('DB_USERNAME'),
              password: config.get('DB_PASSWORD'),
              database: config.get('DB_NAME'),
              autoLoadEntities: true,
              synchronize: false,
              migrations: ['dist/migrations/*.js'],
              migrationsRun: true,
            }),
            inject: [ConfigService],
          }),
        ]
      : []),
    AuthModule,
    UsersModule,
    PropertiesModule,
    ImagesModule,
    BookingsModule,
    ReviewsModule,
    CitiesModule,
    ContactModule,
    AdminModule,
  ],
})
export class AppModule {}
