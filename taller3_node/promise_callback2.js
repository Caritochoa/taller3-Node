

var http = require('http')
var promesa = new Promise((resolve, reject)=>{
    console.log('Iniciando promesa')
    
    http.createServer((peticion, respuesta) =>{
        return(!peticion) ? reject(new Error('Conexion fallida al servidor')) : resolve(respuesta)
       
    }).listen(8080)
})

function asincrono(valor, ejecucion) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(() => {
    ejecucion(valor, valor * valor) }, 0 | Math.random() * 100)
    }
    const max = 10;
    let cnt = 0;
   
    for (let i = 0; i < max; i++) {
        asincrono(i, (valor, resultado) => {
            console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
   
            if (++cnt === max) {
                console.log('Éxito')
    }


    }).catch(err => {
    console.log(err.message)
    })}

