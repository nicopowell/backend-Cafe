import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        unique: true,
        minLenght: 4,
        maxLenght: 26
    },
    email:{
        type: String,
        required:true,
        unique: true,
        maxLenght:200
    },
    password:{
        type: String,
        required:true,
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario