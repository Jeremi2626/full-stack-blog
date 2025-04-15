import express from 'express';
import { 
  getPosts, 
  getPost, 
  createPost,
  deletePost, 
  uploadAuth
} from '../controllers/post.controller.js'; // Importar los controladores de los posts

const router = express.Router();

router.get("/upload-auth", uploadAuth); // Obtener la autenticación para la subida de archivos

router.get("/", getPosts);      // Obtener todos los posts
router.get("/:slug", getPost);      // Obtener un post por su slug
router.post("/", createPost);         // Crear un nuevo post
router.delete("/:id", deletePost);      // Eliminar un post por su ID
  


export default router