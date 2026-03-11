# TempRentals México — Documentación del proyecto

> Plataforma de renta vacacional estilo Airbnb/Plum Guide enfocada en México.
> Backend en **NestJS + PostgreSQL**, frontend en **Next.js + Tailwind CSS**.

---

## Índice

1. [Estructura general](#1-estructura-general)
2. [Stack tecnológico](#2-stack-tecnológico)
3. [Backend — NestJS](#3-backend--nestjs)
4. [Base de datos — PostgreSQL](#4-base-de-datos--postgresql)
5. [Frontend — Next.js](#5-frontend--nextjs)
6. [Cómo correr el proyecto](#6-cómo-correr-el-proyecto)
7. [Variables de entorno](#7-variables-de-entorno)
8. [Comandos de migración](#8-comandos-de-migración)
9. [Próximos pasos](#9-próximos-pasos)

---

## 1. Estructura general

```
C:\Users\David\Documents\Nest\airbnb\
├── backend/          ← API REST en NestJS (puerto 3001)
├── frontend/         ← UI en Next.js    (puerto 3000)
├── mockups/          ← Imágenes de referencia de diseño
└── PROYECTO.md       ← Este archivo
```

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Runtime | Node.js | 22.x |
| Backend framework | NestJS | 11.x |
| ORM | TypeORM | 0.3.x |
| Base de datos | PostgreSQL | 17 |
| Auth | JWT + Passport + bcrypt | — |
| Validación | class-validator / class-transformer | — |
| Subida de archivos | Multer | — |
| Frontend framework | Next.js (App Router) | 16.x |
| Estilos | Tailwind CSS | v4 |
| Estado global | Zustand | — |
| HTTP client | Axios | — |
| Fuentes | Playfair Display + DM Sans (Google Fonts) | — |

---

## 3. Backend — NestJS

### Ubicación
```
backend/
├── src/
│   ├── app.module.ts          ← Módulo raíz con TypeORM + ConfigModule
│   ├── main.ts                ← Bootstrap: CORS, ValidationPipe, prefijo /api
│   ├── database/
│   │   └── data-source.ts     ← DataSource para el CLI de TypeORM
│   ├── migrations/
│   │   └── 1741046400000-InitSchema.ts  ← Migration inicial (todas las tablas)
│   ├── auth/                  ← Autenticación JWT
│   ├── users/                 ← Usuarios (guest / host / admin)
│   ├── properties/            ← Propiedades vacacionales
│   ├── images/                ← Imágenes de propiedades
│   ├── bookings/              ← Reservas
│   ├── reviews/               ← Reseñas y calificaciones
│   ├── cities/                ← Catálogo de ciudades
│   └── contact/               ← Servicio a cliente
└── uploads/                   ← Carpeta para imágenes subidas (Multer)
```

### Módulos generados

Cada módulo tiene su `module.ts`, `controller.ts` y `service.ts` generados con el CLI de Nest.

| Módulo | Ruta base | Descripción |
|--------|-----------|-------------|
| `auth` | `/api/auth` | Registro, login, JWT |
| `users` | `/api/users` | CRUD de usuarios |
| `properties` | `/api/properties` | CRUD de propiedades |
| `images` | `/api/images` | Subida de imágenes por propiedad |
| `bookings` | `/api/bookings` | Gestión de reservas |
| `reviews` | `/api/reviews` | Reseñas por propiedad |
| `cities` | `/api/cities` | Catálogo de ciudades |
| `contact` | `/api/contact` | Servicio a cliente |

### Configuración global (`main.ts`)

```typescript
app.enableCors({ origin: 'http://localhost:3000' });
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
app.setGlobalPrefix('api');
// Puerto: 3001
```

### Dependencias instaladas

```bash
# Producción
@nestjs/typeorm  typeorm  pg
@nestjs/jwt  @nestjs/passport  passport  passport-jwt  bcrypt
@nestjs/config
@nestjs/platform-express  multer
class-validator  class-transformer

# Dev
@types/passport-jwt  @types/bcrypt  @types/multer
```

---

## 4. Base de datos — PostgreSQL

### Instalación
PostgreSQL 17 instalado vía `winget`:
```bash
winget install --id PostgreSQL.PostgreSQL.17
```

### Credenciales por defecto (`.env`)
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=airbnb
```

### Tablas creadas por la migration

```
airbnb (base de datos)
├── cities        ← Ciudades / estados
├── users         ← Usuarios con roles
├── properties    ← Propiedades (FK → users, cities)
├── images        ← Imágenes (FK → properties, CASCADE)
├── bookings      ← Reservas (FK → users, properties)
├── reviews       ← Reseñas (FK → users, properties)
└── migrations    ← Control de versiones TypeORM
```

### Detalle de entidades

**`users`**
```sql
id, name, email (único), password, phone, avatarUrl,
role ENUM('guest','host','admin') DEFAULT 'guest',
createdAt
```

**`cities`**
```sql
id, name (único), country, imageUrl
```

**`properties`**
```sql
id, title, description, pricePerNight NUMERIC(10,2),
isAvailable BOOLEAN DEFAULT true,
address, maxGuests, bedrooms, bathrooms, contactPhone,
createdAt, hostId (FK users), cityId (FK cities)
```

**`images`**
```sql
id, url, altText, propertyId (FK properties CASCADE)
```

**`bookings`**
```sql
id, checkIn DATE, checkOut DATE,
totalPrice NUMERIC(10,2),
status ENUM('pending','confirmed','cancelled','completed'),
guests, createdAt,
guestId (FK users), propertyId (FK properties CASCADE)
```

**`reviews`**
```sql
id, rating INTEGER CHECK(1-5), comment TEXT,
createdAt, authorId (FK users), propertyId (FK properties CASCADE)
```

### Índices creados
```sql
IDX_properties_city, IDX_properties_host, IDX_properties_available
IDX_bookings_guest, IDX_bookings_property, IDX_bookings_status
IDX_reviews_property, IDX_images_property
```

---

## 5. Frontend — Next.js

### Ubicación
```
frontend/src/
├── app/
│   ├── layout.tsx              ← Fuentes: Playfair Display + DM Sans
│   ├── globals.css             ← Paleta cálida: cream, ink, gold, border
│   ├── page.tsx                ← Home: hero, search, estados, propiedades
│   ├── properties/
│   │   ├── page.tsx            ← Listado con filtros por estado
│   │   └── [id]/
│   │       ├── page.tsx        ← Detalle: tabla de precios, amenidades
│   │       └── BookingPanel.tsx← Calculadora de noches interactiva
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── home/
│   │   └── SearchBar.tsx       ← Barra de búsqueda con dropdown (client)
│   ├── layout/
│   │   └── Navbar.tsx
│   └── property/
│       └── PropertyCard.tsx
├── data/
│   └── properties.ts           ← Mock data: 9 propiedades en 4 estados
├── lib/
│   └── api.ts                  ← Axios con interceptor JWT
├── store/
│   └── auth.store.ts           ← Zustand: usuario + token
└── types/
    └── index.ts                ← Interfaces TypeScript
```

### Paleta de diseño

| Variable | Color | Uso |
|----------|-------|-----|
| `--cream` | `#FAF7F0` | Fondo general |
| `--ink` | `#0F0F0F` | Texto principal |
| `--muted` | `#6B6B6B` | Texto secundario |
| `--gold` | `#C9A84C` | Acento, CTAs |
| `--border` | `#E8E2D8` | Bordes suaves |

### Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero full-screen, search bar 3 campos con dropdown, 4 estados, propiedades destacadas |
| `/properties` | Grid de propiedades con chips de filtro por estado |
| `/properties?state=CDMX` | Filtrado por estado |
| `/properties/[id]` | Detalle: tabla de precios, amenidades, panel de reserva |
| `/auth/login` | Formulario de acceso |
| `/auth/register` | Registro de usuario |
| `/contact` | Teléfono de servicio a cliente + formulario |

### Lógica de precios (descuentos por estancia larga)

```typescript
function calcPrice(pricePerNight: number, nights: number): number {
  if (nights >= 15) return pricePerNight * nights * 0.88;  // -12%
  if (nights >= 10) return pricePerNight * nights * 0.93;  // -7%
  if (nights >= 7)  return pricePerNight * nights * 0.96;  // -4%
  return pricePerNight * nights;
}
```

### Propiedades mock (9 en total)

| # | Propiedad | Estado | Precio/noche | Disponible |
|---|-----------|--------|-------------|------------|
| 1 | Penthouse Polanco | CDMX | $3,800 MXN | ✅ |
| 2 | Loft Roma Norte | CDMX | $1,650 MXN | ✅ |
| 3 | Villa Pedregal | CDMX | $6,200 MXN | ❌ |
| 4 | Casa San Pedro | Monterrey | $2,900 MXN | ✅ |
| 5 | Loft Barrio Antiguo | Monterrey | $1,450 MXN | ✅ |
| 6 | Villa Frente al Mar | Baja California | $4,100 MXN | ✅ |
| 7 | Casa Valle de Guadalupe | Baja California | $2,200 MXN | ✅ |
| 8 | Casa Providencia | Guadalajara | $2,450 MXN | ✅ |
| 9 | Hacienda Tlaquepaque | Guadalajara | $3,100 MXN | ❌ |

---

## 6. Cómo correr el proyecto

### Requisitos previos
- Node.js 22+
- PostgreSQL 17 corriendo en localhost
- NestJS CLI instalado globalmente

### Backend
```bash
cd C:\Users\David\Documents\Nest\airbnb\backend

# 1. Crear la base de datos (solo la primera vez)
psql -U postgres -c "CREATE DATABASE airbnb;"

# 2. Correr la migration (crea todas las tablas)
npm run migration:run

# 3. Iniciar en modo desarrollo
npm run start:dev
# → http://localhost:3001/api
```

### Frontend
```bash
cd C:\Users\David\Documents\Nest\airbnb\frontend

npm run dev
# → http://localhost:3000
```

---

## 7. Variables de entorno

### `backend/.env`
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=airbnb

JWT_SECRET=supersecretjwtkey2024
JWT_EXPIRES_IN=7d

PORT=3001
```

### `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

## 8. Comandos de migración

```bash
# Ejecutar todas las migraciones pendientes
npm run migration:run

# Revertir la última migración
npm run migration:revert

# Generar una nueva migración automáticamente (requiere DB conectada)
npm run migration:generate

# Ver estado de migraciones
npm run migration:show
```

---

## 9. Próximos pasos

### Backend (pendiente de implementar)
- [ ] `AuthService` — lógica de register/login con bcrypt + JWT
- [ ] `JwtStrategy` — guard de autenticación para rutas protegidas
- [ ] `PropertiesService` — CRUD completo con filtros (ciudad, precio, disponibilidad)
- [ ] `ImagesService` — subida de archivos con Multer a carpeta `uploads/`
- [ ] `BookingsService` — crear reservas, validar disponibilidad por fechas
- [ ] `ReviewsService` — crear reseña solo si el usuario tuvo una reserva confirmada
- [ ] Seed inicial — cargar las 9 propiedades mock en la base de datos real

### Frontend (pendiente)
- [ ] Conectar SearchBar y páginas al API real (reemplazar mock data)
- [ ] Agregar imágenes reales en `public/images/properties/` y `public/images/states/`
- [ ] Dashboard del anfitrión — gestionar sus propiedades
- [ ] Página de mis reservas — historial del huésped
- [ ] Flujo de reserva completo — conectar `BookingPanel` al endpoint de bookings
- [ ] Persistencia del login — rehidratar Zustand desde localStorage al cargar

### Imágenes (cuando estén listas)
Las imágenes deben ir en:
```
frontend/public/
├── images/
│   ├── states/
│   │   ├── cdmx.jpg
│   │   ├── monterrey.jpg
│   │   ├── baja.jpg
│   │   └── guadalajara.jpg
│   └── properties/
│       ├── cdmx-1-a.jpg   (Penthouse Polanco)
│       ├── cdmx-2-a.jpg   (Loft Roma Norte)
│       └── ...
└── hero.jpg               (Imagen del hero principal)
```
