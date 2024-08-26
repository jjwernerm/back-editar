// Importa el módulo 'express' para crear rutas y manejar solicitudes HTTP
import express from 'express';

// Crea una instancia de un enrutador Express
const router = express.Router();

// Importa las funciones del controlador para consultar y editar productos
import { consultarProducto, editarProducto } from '../controllers/productoControllers.js';

// Define la ruta para consultar un producto por su id y asigna el controlador correspondiente
router.get('/consultar/:idproducto', consultarProducto);

// Define la ruta para editar un producto por su id y asigna el controlador correspondiente
router.put('/editar/:idproducto', editarProducto);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
export default router;