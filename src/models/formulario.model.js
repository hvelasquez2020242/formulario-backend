const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormularioSchema = Schema({
    carnet: String, 
    nombreCompleto: String, 
    direccion: String,
    genero: String, 
    telefono: Number, 
    fechaDeNacimiento: String, 
    carreraDelEstudiante: String,
    generoDePoesia: String,
    fechaDeInscripcion: String,
    fechaDeDeclamacion: String
});

module.exports = mongoose.model('Formulario', FormularioSchema);