import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1741046400000 implements MigrationInterface {
  name = 'InitSchema1741046400000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // ─── ENUMS ────────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TYPE "user_role_enum" AS ENUM ('guest', 'host', 'admin')
    `);

    await queryRunner.query(`
      CREATE TYPE "booking_status_enum" AS ENUM ('pending', 'confirmed', 'cancelled', 'completed')
    `);

    // ─── CITIES ───────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "cities" (
        "id"        SERIAL PRIMARY KEY,
        "name"      VARCHAR NOT NULL UNIQUE,
        "country"   VARCHAR,
        "imageUrl"  VARCHAR
      )
    `);

    // ─── USERS ────────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id"        SERIAL PRIMARY KEY,
        "name"      VARCHAR NOT NULL,
        "email"     VARCHAR NOT NULL UNIQUE,
        "password"  VARCHAR NOT NULL,
        "phone"     VARCHAR,
        "avatarUrl" VARCHAR,
        "role"      "user_role_enum" NOT NULL DEFAULT 'guest',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now()
      )
    `);

    // ─── PROPERTIES ───────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "properties" (
        "id"             SERIAL PRIMARY KEY,
        "title"          VARCHAR NOT NULL,
        "description"    TEXT NOT NULL,
        "pricePerNight"  NUMERIC(10,2) NOT NULL,
        "isAvailable"    BOOLEAN NOT NULL DEFAULT true,
        "address"        VARCHAR,
        "maxGuests"      INTEGER,
        "bedrooms"       INTEGER,
        "bathrooms"      INTEGER,
        "contactPhone"   VARCHAR,
        "createdAt"      TIMESTAMP NOT NULL DEFAULT now(),
        "hostId"         INTEGER,
        "cityId"         INTEGER,
        CONSTRAINT "FK_properties_host"
          FOREIGN KEY ("hostId") REFERENCES "users"("id") ON DELETE SET NULL,
        CONSTRAINT "FK_properties_city"
          FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE SET NULL
      )
    `);

    // ─── IMAGES ───────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "images" (
        "id"         SERIAL PRIMARY KEY,
        "url"        VARCHAR NOT NULL,
        "altText"    VARCHAR,
        "propertyId" INTEGER,
        CONSTRAINT "FK_images_property"
          FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE
      )
    `);

    // ─── BOOKINGS ─────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "bookings" (
        "id"          SERIAL PRIMARY KEY,
        "checkIn"     DATE NOT NULL,
        "checkOut"    DATE NOT NULL,
        "totalPrice"  NUMERIC(10,2) NOT NULL,
        "status"      "booking_status_enum" NOT NULL DEFAULT 'pending',
        "guests"      INTEGER,
        "createdAt"   TIMESTAMP NOT NULL DEFAULT now(),
        "guestId"     INTEGER,
        "propertyId"  INTEGER,
        CONSTRAINT "FK_bookings_guest"
          FOREIGN KEY ("guestId") REFERENCES "users"("id") ON DELETE SET NULL,
        CONSTRAINT "FK_bookings_property"
          FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE
      )
    `);

    // ─── REVIEWS ──────────────────────────────────────────────────────────────
    await queryRunner.query(`
      CREATE TABLE "reviews" (
        "id"         SERIAL PRIMARY KEY,
        "rating"     INTEGER NOT NULL CHECK ("rating" BETWEEN 1 AND 5),
        "comment"    TEXT,
        "createdAt"  TIMESTAMP NOT NULL DEFAULT now(),
        "authorId"   INTEGER,
        "propertyId" INTEGER,
        CONSTRAINT "FK_reviews_author"
          FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL,
        CONSTRAINT "FK_reviews_property"
          FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE
      )
    `);

    // ─── MIGRATIONS TABLE (TypeORM la crea sola, pero por claridad) ───────────
    // TypeORM crea "migrations" automáticamente al ejecutar el CLI

    // ─── ÍNDICES ──────────────────────────────────────────────────────────────
    await queryRunner.query(`CREATE INDEX "IDX_properties_city" ON "properties" ("cityId")`);
    await queryRunner.query(`CREATE INDEX "IDX_properties_host" ON "properties" ("hostId")`);
    await queryRunner.query(`CREATE INDEX "IDX_properties_available" ON "properties" ("isAvailable")`);
    await queryRunner.query(`CREATE INDEX "IDX_bookings_guest" ON "bookings" ("guestId")`);
    await queryRunner.query(`CREATE INDEX "IDX_bookings_property" ON "bookings" ("propertyId")`);
    await queryRunner.query(`CREATE INDEX "IDX_bookings_status" ON "bookings" ("status")`);
    await queryRunner.query(`CREATE INDEX "IDX_reviews_property" ON "reviews" ("propertyId")`);
    await queryRunner.query(`CREATE INDEX "IDX_images_property" ON "images" ("propertyId")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Borrar en orden inverso respetando las FK
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_images_property"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_reviews_property"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_bookings_status"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_bookings_property"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_bookings_guest"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_properties_available"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_properties_host"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_properties_city"`);

    await queryRunner.query(`DROP TABLE IF EXISTS "reviews"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "bookings"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "images"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "properties"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "cities"`);

    await queryRunner.query(`DROP TYPE IF EXISTS "booking_status_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "user_role_enum"`);
  }
}
