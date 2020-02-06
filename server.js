
const express = require('express')
const app = express()

app.listen(3000, function() {
    console.log('servidor rodando na porta 3000')
})

app.set('view engine', 'pug')  

app.get('/', function(_req, res) {
res.render('index');
});

app.post('/adduser', function (_req) {

    var db = require("../db");
    var nome = req.body.nome;

    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var user = new Users({ nome: nome });
    user.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Usuário Salvo");
        }
    });
});
