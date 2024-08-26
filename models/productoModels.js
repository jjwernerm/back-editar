import mongoose from "mongoose";

const productoSchema = mongoose.Schema({

  idproducto: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    trim: true
  },
}, 
{
  timestamps: true,
});

const producto = mongoose.model('productos', productoSchema);

export default producto;