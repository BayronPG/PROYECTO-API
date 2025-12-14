
import 'dotenv/config';
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma', // Ruta al schema
  migrations: {
    path: 'prisma/migrations', // Carpeta para migraciones
  },
  datasource: {
    url: env('DATABASE_URL'), // Lee la URL del .env
  },
});
