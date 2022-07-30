const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormularioSchema = Schema({
    carnet: String, 
    nombreCompleto: String, 
    direccion: String,
    genero: String, 
    telefono: Number, 
    fechaDeNacimiento: Date, 
    carreraDelEstudiante: String,
    generoDePoesia: String,
    fechaDeInscripcion: String,
    fechaDeDeclamacion: Date
});

module.exports = mongoose.model('Formulario', FormularioSchema);