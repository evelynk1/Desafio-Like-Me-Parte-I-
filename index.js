import express from 'express';
import cors from 'cors';
import { obtenerPosts, agregarPost } from './consultas.js'; 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts." });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const nuevoPost = await agregarPost(titulo, img, descripcion);
    res.status(201).json(nuevoPost);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el post." });
  }
});

app.listen(PORT, () => console.log(`Servidor de Like Me corriendo en http://localhost:${PORT} `));