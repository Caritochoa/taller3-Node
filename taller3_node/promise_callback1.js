

var http = require('http')
var promesa = new Promise((resolve, reject)=>{
    console.log('Iniciando promesa')
    
    http.createServer((peticion, respuesta) =>{
        return(!peticion) ? reject(new Error('Conexion fallida al servidor')) : resolve(respuesta)
       
    }).listen(8080)
})

promesa.then(res => {

    function multiplicaPorSiMIsmo(valor, ejecuta){
    	console.log(`inicia ejecucion con el valor =${valor}`)
    	
    	setTimeout(() => {
    		ejecuta(valor, valor *valor);
  }, 1000)
}

	
	multiplicaPorSiMismo(2, (valor, resultado) => {
		console.log(`finaliza con el valor =${valor} y el resultado = ${resultado}`)
	})

	console.log('procesando')

	}).catch(err => {
		console.log(err.message)
	})
