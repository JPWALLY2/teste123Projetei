var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testeProjetei');

var userSchema = new mongoose.Schema({
    nome: String
    // telefone: String, 
    // data_nasc: Date,
    // rg: String,
    // cpf: String,
    // endereco: String,
    // cidade: String,
    // estado: String,
    // cep: String
}, { collection: 'usercollection' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }