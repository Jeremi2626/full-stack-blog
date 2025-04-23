import express from 'express';
import { 
  getPosts, 
  getPost, 
  createPost,
  deletePost, 
  uploadAuth,
  featurePost
} from '../controllers/post.controller.js'; // Importar los controladores de los posts
import increaseVisit from '../middlewares/increaseVisit.js';

const router = express.Router();

router.get("/upload-auth", uploadAuth); // Obtener la autenticación para la subida de archivos

router.get("/", getPosts);      // Obtener todos los posts
router.get("/:slug", increaseVisit, getPost);      // Obtener un post por su slug
router.post("/", createPost);         // Crear un nuevo post
router.delete("/:id", deletePost);      // Eliminar un post por su ID
router.patch("/feature", featurePost); // Destacar un post
  


export default router