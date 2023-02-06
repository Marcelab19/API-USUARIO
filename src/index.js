const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 3030; //Numero del puerto

//middleware estamos convirtiendolos en objetod de js
app.use(express.json());         //recibimos inforcacion
app.use(cors());                 //hablitamos otras aplicaciones para realizar solicitudes a nuestra app


//usuando la ruta de rauter
app.use("/usuarios",usuarios);   //especificando le un nombre de ruta a usuarios

app.listen(posrt,()=>{
    console.log("Este servidor se esta ejecuntando en el puerto:", port);
});