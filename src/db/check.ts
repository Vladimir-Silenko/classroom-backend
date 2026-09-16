import { sql } from 'drizzle-orm';

try {
  const { db } = await import('./index.js');
  await db.execute(sql`select 1`);
  console.log('Database connection successful.');
} catch {
  console.error('Database connection failed. Check DATABASE_URL in .env and network access to Neon.');
  process.exitCode = 1;
}
