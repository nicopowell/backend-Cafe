import { validationResult } from "express-validator";
import Usuario from "../models/usuario"

export const obtenerListaUsuarios = async (req, res) => {
    try {
        //Buscar en la BD la collection de productos
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los usuarios",
        });
    }
};

export const obtenerUsuario = async (req, res) => {
    try {
        //Buscar en la BD la documento usuario mediante el id
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener el usuario",
        });
    }
};

export const crearUsuario = async (req, res) => {
    try {
        //trabajar con los resultados de la validacion
        const errors = validationResult(req);
        //errors.isEmpty(), true:esta vacio, false:Tiene errores
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear un usuario",
        });
    }
};