import { Router } from "express";
import { crearUsuario, obtenerListaUsuarios, obtenerUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerListaUsuarios).post(crearUsuario)
router.route("/usuarios/:id").get(obtenerUsuario)

export default router;