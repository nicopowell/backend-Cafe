import { Router } from "express";
import { borrarProducto, controladorPrueba, crearProducto, editarProducto, obtenerListaProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router.route("/productos").post(crearProducto).get(obtenerListaProductos);
router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(editarProducto);

export default router;

// app.get('/prueba', (req, res)=>{
//   res.send('Esta es una prueba de mi ruta GET')
// })
