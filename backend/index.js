import express from 'express';
import connectDB from './lib/connectDB.js';
import mongoose, { Error } from 'mongoose';
import dotenv from 'dotenv';
import postRouter from './routes/post.route.js'; // Importar las rutas de los posts
import userRouter from './routes/user.route.js';
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js'; // Importar las rutas del webhook
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from 'cors'; // Importar el middleware de CORS
dotenv.config(); // Cargar las variables de entorno desde el archivo .env


const app = express();
app.use(cors(process.env.CLIENT_URL)); // Usar el middleware de CORS para permitir peticiones desde el frontend
app.use(clerkMiddleware ()); // Middleware de Clerk para autenticar las peticiones
app.use("/webhooks", webhookRouter); // Ruta para el webhook de Clerk
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones JSON

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*app.get('/test', (req, res) => {
  res.status(200).send('Hello World!'); 
} ) */
/*app.get("/auth-state", (req, res) => {
       const authState = req.auth;
       res.json(authState);
  });*/

  /*app.get("/protect", (req, res) => {
       const {userId} = req.auth;
       if(!userId){
         return res.status(401).json("not authenticated")
       }
       res.status(200).json("content")
     });*/

  /*app.get("/protect2", requireAuth(), (req, res) => {
       res.status(200).json("content")
     });*/
  
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || 'Something went wrong',
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
connectDB (); 
  console.log('Server is running on port 3000');
})