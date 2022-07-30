const express = require('express');
const formularioControlador = require('../controllers/formulario.controller')

const api = express.Router();
api.get('/obtenerReporte/:genero', formularioControlador.obtenerReporte)
api.get('/obtenerFormularios', formularioControlador.obtnerFormularios)
api.post('/agregarFormulario', formularioControlador.agregarFormulario)
api.get('/obtenerReporteCarrera/:carrera', formularioControlador.obtenerRepoderPorCarrera)
api.get('/obtenerReporteFecha', formularioControlador.obtnerReporteFecha)
module.exports = api;