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
    try {
        const [rows] = await db.query('SELECT * FROM usersG');
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener usuarios.', details: err.message });
    }
});

// GET para obtener los chats
app.get("/getChats", async function (req, res) {
    try {
        const [rows] = await db.query('SELECT * FROM chatsG');
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener chats.', details: err.message });
    }
});

// GET para obtener las relaciones entre usuarios y chats
app.get("/getChatXuser", async function (req, res) {
    try {
        const [rows] = await db.query('SELECT * FROM chatXuserG');
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener las relaciones de chats y usuarios.', details: err.message });
    }
});

// GET para obtener los mensajes
app.get("/getMensajes", async function (req, res) {
    try {
        const [rows] = await db.query('SELECT * FROM mensajesG');
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener los mensajes.', details: err.message });
    }
});


app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
    console.log('Defined routes:');
    console.log('   [GET] http://localhost:3001/');
    console.log('   [GET] http://localhost:3001/getUsers');
    console.log('   [GET] http://localhost:3001/getChats');
    console.log('   [GET] http://localhost:3001/getChatXuser');
    console.log('   [GET] http://localhost:3001/getMensajes');
});
