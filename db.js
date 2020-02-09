
const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/testeProjetei", {
    seNewUrlParser: true
}).then(() => {
    console.log("MongoDB conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
})

const UsuarioSchema = mongoose.Schema({

    nome:{
        type: String,
        // para ser obrigatorio
        require: true
    },
    telefone:{
        type: Number,
        require: true
    },
    data_nasc:{
        type: Date,
        require: true
    },
    rg:{
        type: Number,
        require: true
    },
    cpf:{
        type: Number,
        require: true
    },
    endereco:{
        type: String,
        require: true
    },
    cidade:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
    cep:{
        type: Number,
        require: true
    },
})

mongoose.model('usuarios', UsuarioSchema )

const Leo = mongoose.model('usuarios')

new Leo ({
    nome: "Leo",
    telefone: 88773355,
    data_nasc: "04-04-1992",
    rg: 57789362,
    cpf: 88877755533,
    endereco: "Avenida",
    cidade: "Pelotas",
    estado: "RS",
    cep: 97266000
}).save().then(() => {
    console.log("Usuario criado")
}).catch((err) => {
    console.log("Erro: " +err)
})