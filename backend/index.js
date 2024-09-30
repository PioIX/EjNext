var express = require ("express"); //Tipo de servidor: Express
const cors = require('cors');
var bodyParser = require("body-parser"); //Convierte los JSON
const MySQL = require("./modulos/mysql.js");//Declaro SQL

var app = express(); //Inicializo express
var port = process.env.PORT || 3001; //Ejecuto el servidor en el puerto 3000
app.use(cors({
    origin: 'http://127.0.0.1:5500' // Ponerle tu direccion y host,aparece en el buscador
  }));

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

app.get("/getUsers", async function (req, res) {
    const respuesta = await MySQL.realizarQuery(`SELECT * FROM usersG`);
    res.send(respuesta);
});


// GET para obtener los chats
app.get("/getChats", async function (req, res) {
    const respuesta = await MySQL.realizarQuery(`SELECT * FROM chatsG`);
    res.send(respuesta);
});

// GET para obtener las relaciones entre usuarios y chats
app.get("/getChatXuser", async function (req, res) {
    const respuesta = await MySQL.realizarQuery(`SELECT * FROM chatXUserG`);
    res.send(respuesta);
});

// GET para obtener los mensajes
app.get("/getMensajes", async function (req, res) {
    const respuesta = await MySQL.realizarQuery(`SELECT * FROM mensajesG`);
    res.send(respuesta);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log('Defined routes:');
    console.log('   [GET] http://localhost:3001/');
    console.log('   [GET] http://localhost:3001/getUsers');
    console.log('   [GET] http://localhost:3001/getChats');
    console.log('   [GET] http://localhost:3001/getChatXUser');
    console.log('   [GET] http://localhost:3001/getMensajes');
});
