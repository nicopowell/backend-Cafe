import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const controladorPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta GET");
};

export const crearProducto = async (req, res) => {
    try {
        //trabajar con los resultados de la validacion
        const errors = validationResult(req);
        //errors.isEmpty(), true:esta vacio, false:Tiene errores
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear un producto",
        });
    }
};

export const obtenerListaProductos = async (req, res) => {
    try {
        //Buscar en la BD la collection de productos
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los productos",
        });
    }
};

export const obtenerProducto = async (req, res) => {
    try {
        //Buscar en la BD la documento producto mediante el id
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener el producto",
        });
    }
};

export const borrarProducto = async (req, res) => {
    try {
        //Buscar en la BD la documento producto mediante el id
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "EL producto fue eliminado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo borrar el producto",
        });
    }
};

export const editarProducto = async (req, res) => {
    try {
        //Buscar en la BD la documento producto mediante el id
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "El producto fue actualizado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo borrar el producto",
        });
    }
};
