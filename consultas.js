import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: '', 
  port: 5432,
  allowExitOnIdle: true
});

export const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

export const agregarPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *";
  const valores = [titulo, img, descripcion];
  const { rows } = await pool.query(consulta, valores);
  return rows[0];
};