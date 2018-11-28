
//Primero declare todas las promesas
//Y  a partir de la linea 136 las ordene.

var http = require('http')
var promesa = new Promise((resolve, reject)=>{
    console.log('Iniciando promesa')
    
    http.createServer((peticion, respuesta) =>{
        return(!peticion) ? reject(new Error('Conexion fallida al servidor')) : resolve(respuesta)
       
    }).listen(8080)
})
// Promesas que hizo Pepe al principio del año

//Despertarse Temprano
const despertar = new Promise((resolve, reject) => {
    let desperto_a_tiempo = true
    let error = function reject(){
        new Error('No sono el despertador')
    }
           
    if(desperto_a_tiempo){
        resolve()
    }else{
        reject()
    }
});
//Coge el trasmilenio

const coger_trasmi = new Promise((resolve, reject) => {
    let tomo_el_trasmi = true
    let error = function reject(){
        new Error('paro en el portal y no puede coger tranporte')
    }
           
    if(tomo_el_trasmi){
        resolve()
    }else{
        reject()
    }
});


//Entrar a estudiar

const estudiar = new Promise((resolve, reject) => {
    let entro_a_estudiar = true
    let error = function reject(){
        new Error('llega tarde y no entro a clase')
    }
           
    if(entro_a_estudiar){
        resolve()
    }else{
        reject()
    }
});

//almorzar

const almorzar = new Promise((resolve, reject) => {
    let bien_almorzado = true
    let error = function reject(){
        console.log('Que asco!! Un peloooo!!!!')
    }
           
    if(bien_almorzado){
        resolve()
    }else{
        reject()
    }
});

//Trabaja en Bellatrix

const trabajar = new Promise((resolve, reject) => {
    let trabajo_oportunamente = true
    let error = function reject(){
        console.log('olvido el carnet, no pudo ingresar')
    }
           
    if(trabajo_oportunamente){
        resolve()
    }else{
        reject()
    }
});

//sale  a relajarse con sus amigos

const relajarse = new Promise((resolve, reject) => {
    let relajado = true
    let error = function reject(){
        console.log('Pepe te robaron y te dejaron limpio')
    }
           
    if(relajado){
        resolve()
    }else{
        reject()
    }
});

//vuelve a casa

const regresar = new Promise((resolve, reject) => {
    let regreso = true
    let error = function reject(){
        console.log('Pepe a dormir al parque')
    }
           
    if(regreso){
        resolve()
    }else{
        reject()
    }
});

//ve netflix

const ver_netflix = new Promise((resolve, reject) => {
    let vio_peli = true
    let error = function reject(){
        console.log('Se rompio la cama... No tiene donde dormir')
    }
           
    if(vio_peli){
        resolve()
    }else{
        reject()
    }
});


//Poniendo juntas las promesas de Pepe.

    promesa.then(result => despertar(result)
    ).then(result => coger_trasmi(result)
    ).then(result => estudiar(result)
    ).then(result => almorzar(result)
    ).then(result => trabajar(result)
    ).then(result => relajarse(result)
    ).then(result => regresar(result)
    ).then(result => ver_netflix(result)
    ).catch(err => {
		console.log(err.message)
	})