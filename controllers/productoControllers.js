// Importa el modelo de producto para interactuar con la base de datos
import productoModels from '../models/productoModels.js';

// Controlador para consultar un producto por su id
const consultarProducto = async (req, res) => { 

  // Extrae el id del producto de los parámetros de la solicitud
  const { idproducto } = req.params; 

  try { 
    // Busca el producto en la base de datos por su id
    const producto = await productoModels.findOne({ idproducto }); 

    // Si el producto no existe, responde con un mensaje de error
    if (!producto) { 
      return res.status(400).json({ msg: `El producto con el Id: ${idproducto} no existe` });
    };

    // Si el producto existe, responde con los datos del producto
    res.json(producto); 
  } catch (error) { 
    // En caso de error, responde con un mensaje de error y muestra el error en la consola
    res.status(500).json({ msg: 'Error en la solicitud: contactar al administrador' });
    console.log(`Error ${error.status || 500}: ${error.message}`); 
  };
};

// Controlador para editar un producto por su id
const editarProducto = async (req, res) => {

  // Extrae el id del producto de los parámetros de la solicitud
  const { idproducto } = req.params;
  
  try {   
    // Busca el producto en la base de datos por su id
    const producto = await productoModels.findOne({ idproducto });

    // Actualiza el nombre del producto si se proporciona en la solicitud
    producto.nombre = req.body.nombre || producto.nombre;

    // Guarda los cambios en la base de datos
    await producto.save();

    // Responde con un mensaje de éxito
    res.json({
      msg: `El producto con el Id: ${idproducto} ha sido editado con éxito`
    });

  } catch (error) {
    // En caso de error, responde con un mensaje de error y muestra el error en la consola
    res.status(500).json({ msg: 'Error en la solicitud: contactar al administrador' });
    console.log(`Error ${error.status || 400}: ${error.message}`);
  }
};

// Exporta los controladores para que puedan ser utilizados en otras partes de la aplicación
export { consultarProducto, editarProducto };