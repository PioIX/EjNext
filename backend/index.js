var express = require ("express"); //Tipo de servidor: Express
const cors = require('cors');
var bodyParser = require("body-parser"); //Convierte los JSON
const MySQL = require("./modulos/mysql.js");//Declaro SQL

var app = express(); //Inicializo express
var port = process.env.PORT || 3001; //Ejecuto el servidor en el puerto 3000
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:3000', 'http://localhost:3001']
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
            
app.post("/postUser", async function (req, res) {  
    await MySQL.realizarQuery(
      `INSERT INTO usersG (nombre, apellido, username, password, mail, image) VALUES
       ('${req.body.firstName}','${req.body.lastName}','${req.body.username}','${req.body.password}','${req.body.email}','${req.body.image}')`
    );
  
    res.send(true);
});

app.post("/postMensaje", async function (req, res) {  
    await MySQL.realizarQuery(
      `INSERT INTO mensajesG (fecha, content, idChatXUser) VALUES
      ('${req.body.fecha}', '${req.body.content}', ${req.body.idChatXUser})`
    );
  
    res.send(true);
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
    console.log('   [POST] http://localhost:3001/postUser')
    console.log('   [POST] http://localhost:3001/postMensaje')
});
