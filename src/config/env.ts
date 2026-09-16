import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL?.trim();

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required. Copy .env.example to .env and set your Neon connection string.');
}

export const env = {
  DATABASE_URL: databaseUrl,
};
