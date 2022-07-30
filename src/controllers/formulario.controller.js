const Formulario = require('../models/formulario.model')

function obtnerFormularios(req, res) {
    formulario.find({}, (err, formulariosEncontrados) => {
        if (err) return res.status(500).send({ mensaje: 'Hubo un error en la peticion' })
        if (!formulariosEncontrados) return res.status(404).send({ mensaje: 'Hubo un error obtener los formularios' })
        return res.status(200).send({ formularios: formulariosEncontrados })
    })
}
function agregarFormulario(req, res) {
    const parametros = req.body;
    var carnet = parametros.carnet
    const cantidadDeLetras = parametros.carnet.length
    const ultimoValor = carnet.substring(cantidadDeLetras - 1)
    const modeloFormulario = new Formulario()
    let fecha = new Date();
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    if (cantidadDeLetras === 6) {
        if (carnet.includes('0')) {
            return res.status(500).send({ mensaje: 'El carnet no puede tener ceros' })
        } else {
            if (carnet.indexOf('A', 0)) {
                return res.status(500).send({ mensaje: 'El primer caracter tiene que sear una A mayuscula' })
            } else {
                if (carnet.indexOf('5', 2) === -1) {
                    return res.status(500).send({ mensaje: 'El tercer caracter tiene que ser un 5' })
                } else {
                    if (ultimoValor == 1 || ultimoValor == 3 || ultimoValor == 9) {
                        modeloFormulario.carnet = parametros.carnet;
                        modeloFormulario.nombreCompleto = parametros.nombres + ' ' + parametros.apellidos;
                        modeloFormulario.direccion = parametros.direccion;
                        modeloFormulario.genero = parametros.genero;
                        modeloFormulario.telefono = parametros.telefono;
                        modeloFormulario.fechaDeNacimiento = parametros.fechaDeNacimiento;
                        modeloFormulario.carreraDelEstudiante = parametros.carreraDelEstudiante;
                        modeloFormulario.generoDePoesia = parametros.generoDePoesia;
                        modeloFormulario.fechaDeInscripcion = fecha.toLocaleDateString()
                        if (ultimoValor == 1 && parametros.generoDePoesia == "dramatico") {
                            console.log('5 dias despues');
                            fecha = Number(fecha);
                            fecha += 9 * 24 * 60 * 60 * 1000;
                            fecha = new Date(fecha)

                            if (diasSemana[fecha.getDay()] == 'Sabado') {
                                fecha = Number(fecha);
                                fecha += 2 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                console.log(fecha);

                                modeloFormulario.fechaDeDeclamacion = fecha.toLocaleDateString();
                            } else if (diasSemana[fecha.getDay()] == 'Domingo') {
                                fecha = Number(fecha);
                                fecha += 1 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                modeloFormulario.fechaDeDeclamacion = fecha.toLocaleDateString();

                            }
                        } else if (ultimoValor == 3 && parametros.generoDePoesia == 'epico') {
                            const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDay()
                            console.log(fecha.getDate());
                            fechaActual = fecha.getDate()
                            if (diasSemana[ultimoDia] == 'Sabado') {
                                fecha.getDate
                                const ultimoDiaFecha = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toLocaleDateString()

                                fecha = Number(fecha);
                                fecha -= 1 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                console.log('fecha actual' + fechaActual + 'ultimo dia' + fecha.getDate());
                                if (fechaActual >= fecha.getDate()) {
                                    fecha = Number(fecha);
                                    fecha += 9 * 24 * 60 * 60 * 1000;
                                    fecha = new Date(fecha)
                                    const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0)


                                    console.log(ultimoDia.toLocaleString() + diasSemana[ultimoDia.getDay()]);
                                    modeloFormulario.fechaDeDeclamacion = ultimoDia.toLocaleDateString()                                }
                                modeloFormulario.fechaDeDeclamacion = fecha.toLocaleDateString();
                                console.log(ultimoDiaFecha + 'sabado');
                            } else if (diasSemana[ultimoDia] == 'Domingo') {
                                const ultimoDiaFecha = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toLocaleDateString()
                                fecha = Number(fecha);
                                fecha -= 2 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                console.log(ultimoDiaFecha + 'domingo');

                                console.log('fecha actual' + fechaActual + 'ultimo dia' + fecha.getDate());
                                if (fechaActual >= fecha.getDate()) {
                                    fecha = Number(fecha);
                                    fecha += 9 * 24 * 60 * 60 * 1000;
                                    fecha = new Date(fecha)
                                    const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0)

                                    console.log(ultimoDia.toLocaleString() + diasSemana[ultimoDia.getDay()]);
                                    modeloFormulario.fechaDeDeclamacion = ultimoDia.toLocaleDateString()


                                }
                            }
                        } else {
                            var curr = new Date;
                            const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDay()
                            var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
                            var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+5));
                             if(diasSemana[ultimoDia] == 'Sabado'){
                                fecha = Number(fecha);
                                fecha += 2 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                var lastday = new Date(fecha.setDate(fecha.getDate() - fecha.getDay()+5));
                                modeloFormulario.fechaDeDeclamacion = lastday.toLocaleDateString()

                             }else if(diasSemana[ultimoDia] == 'Domingo'){
                                fecha = Number(fecha);
                                fecha += 1 * 24 * 60 * 60 * 1000;
                                fecha = new Date(fecha)
                                var lastday = new Date(fecha.setDate(fecha.getDate() - fecha.getDay()+5));
                                modeloFormulario.fechaDeDeclamacion = lastday.toLocaleDateString()

                             }

                        }   
                        modeloFormulario.save((err, formularioGuardado) => {
                            if (err) return res.status(500).send({ mensaje: 'Hubo un error en la peticion' })
                            if (!formularioGuardado) return res.status(404).send({ mensaje: 'Hubo un error al agregar el formulario' })
                            return res.status(200).send({ formulario: formularioGuardado })

                        })

                    } else {
                        return res.status(500).send({ mensaje: 'El ultimo valor tiene que ser 1, 3 o 9' })
                    }
                }
            }
        }

    } else {
        return res.status(500).send({ mensaje: 'tiene que tener 6 letras el carnet' })

    }

}
function obtenerReporte(req, res){
    const genero = req.params.genero;
    Formulario.find({generoDePoesia: genero}, (err, reporteEncontrado)=>{
        if(err) return res.status(500).send({mensaje: 'Hubo un error en la peticion'})
        if(!reporteEncontrado) return res.status(404).send({mensaje: 'Hubo un error al obtener el reporte'})
        return res.status(200).send({reporte: reporteEncontrado})
    })
}
function obtenerRepoderPorCarrera(req,res){
    const carrera = req.params.carrera; 
    Formulario.find({carreraDelEstudiante: carrera}, (err, reporteEncontrado)=>{
        if(err) return res.status(500).send({mensaje: 'Hubo un error en la peticion'})
        if(!reporteEncontrado) return res.status(404).send({mensaje: 'Hubo un error al obtener el reporte'})
        return res.status(200).send({reporte: reporteEncontrado})
    })
}
function obtnerReporteFecha(req, res){
    Formulario.find((err, formulariosEncontrados)=>{
        if(err) return res.status(500).send({mensaje: 'Hubo un error en la peticion'})
        if(!formulariosEncontrados) return res.status(404).send({mensaje: 'Hubo un error al obtener el reporte'})
        return res.status(200).send({reporte: formulariosEncontrados})
    }).sort({fechaDeDeclamacion: -1})
}


module.exports = {
    obtnerFormularios,
    agregarFormulario,
    obtenerReporte,
    obtenerRepoderPorCarrera,
    obtnerReporteFecha,
}