import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import productosRouter from "./src/routes/productos.routes";

dotenv.config();

//configurar un puerto
//crear una instancia de express
const app = express();

app.set("PORT", process.env.PORT || 4000);

app.listen(app.get("PORT"), () => {
  console.log("Estoy en el puerto " + app.get("PORT"));
});

//middlewares: Funciones que se ejecutan antes de las rutas
app.use(express.json()); //Permite interpretar el formato json en un request
app.use(express.urlencoded({ extended: true })); //Permite interpretar string y arrays del request
app.use(cors()); //Permite conexiones remotas
app.use(morgan('dev')) //Me da info extra en la terminal
//Cargar un archivo estatico
console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")))


//rutas
// http://localhost:4000/prueba
// app.get('/prueba', (req, res)=>{
//   res.send('Esta es una prueba de mi ruta GET')
// })
// http://localhost:4000/apicafe/prueba
app.use("/apicafe", productosRouter)