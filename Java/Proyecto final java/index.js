var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());       
app.use(express.urlencoded()); 

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/pagina.html'));
 
});
app.post("/datos", function (req,res) {
    res.json({
        "Nombre": req.body.nombre,
        "Apellidos": req.body.apellido,
        "Numero de telefono o correo":req.body.email,
        "Contrase&ntilde;a": req.body.contra,
        "fecha de nacimineto": req.body.fecha,
        "sexo": req.body.sexo
    }
    );
});
 

app.listen(3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});