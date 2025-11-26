export async function up(db) {
  await db.none(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
}

export async function down(db) {
  await db.none(`DROP TABLE IF EXISTS posts`);
}
