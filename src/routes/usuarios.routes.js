import { Router } from "express";
import {
    crearUsuario,
    login,
    obtenerListaUsuarios,
    obtenerUsuario,
    } from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router
    .route("/usuarios")
    .get(obtenerListaUsuarios)
    .post(
        [
            check("nombreUsuario").notEmpty().withMessage("El nombre es obligatorio"),
            check("email", "El email es obligatorio").isEmail(),
            check("password", "El password debe de ser de 6 caracteres")
              .isLength({
                min: 6,
                max: 15,
              })
              .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
              .withMessage(
                "El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales"
              ),
          ],
        crearUsuario
    );
router.route("/usuarios/:id").get(obtenerUsuario);

router.route("/usuarios/login").post(
  [
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe de ser de 6 caracteres")
        .isLength({
          min: 6,
          max: 15,
        })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        .withMessage(
          "El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales"
        ),
    ],
    login
);
export default router;
