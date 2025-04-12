import express from 'express';
import { 
  getPosts, 
  getPost, 
  createPost,
  deletePost, 
} from '../controllers/post.controller.js'; // Importar los controladores de los posts

const router = express.Router();

router.get("/", getPosts);      // Obtener todos los posts
router.get("/:slug", getPost);      // Obtener un post por su slug
router.post("/", createPost);         // Crear un nuevo post
router.delete("/:id", deletePost);      // Eliminar un post por su ID
  


export default router