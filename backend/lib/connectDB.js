import mongoose from 'mongoose'; // Importar mongoose para conectar a MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('MongoDB conectado exitosamente');
  } catch (err) {
    console.log(err); // Imprimir el error en caso de fallo
  }
};

export default connectDB; // Exportar la función para usarla en otros archivos