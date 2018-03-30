const express = require("express"); //las const llaman a la libreria sin poder modificarlas
const app = express();
const http = require('http');
const mongoose = require("mongoose");
const apiPost = require("./server/routers/apiPost");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/mean_foro"); //te conectas con tu base de datos

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//get, mandas a llamar documentos y mandas informacion
// post, salva informacion de la base de datos de manera privada
//delate, borrar
//update, actualizar
 
/*
app.get("/perritos", (req, res) => {
	res.send('hello world');
});
*/

app.use("/api/post", apiPost); 

const port = process.env.PORT || '3000'; //en que puerto sera tu aplicacion
app.set('port', port); 

const server = http.createServer(app); //creas el servidor

server.listen(port, () => console.log('API viva'));  //llamas al servidor en el puerto especificado
