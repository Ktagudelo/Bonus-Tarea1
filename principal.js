
const express = require('express')
const app = express()

const opciones = {
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand: true,
		alias:'c'
	}

}

const argv = require('yargs')
			.command('inscribir','Cursos para inscribirse', opciones)
			.argv


let cursos = [{
		id: 1,
		nombre: 'Node',
		duracion: 60,
		valor: 150000
},
{
		
		id: 2,
		nombre: 'Angular',
		duracion: 100,
		valor: 200000
},
{
		id: 3,
		nombre: 'React',
		duracion: 40,
		valor: 100000


}];


if (argv._[0]!= 'inscribir'){


	console.log('LISTADO DE CURSOS');

	for (var i = 0; i < cursos.length ; i++) {
        (function(index) {
         setTimeout(function() { 
         	console.log( 'Id:' + cursos[index].id+ " " + 
         				 'nombre:' + cursos[index].nombre + " " + 
         				 'duracion:' + cursos[index].duracion + 'h' + " " + 
         				 'valor:' + cursos[index].valor); }, i * 2000);
         })(i);
    }

}else{


console.log('\n');
console.log(argv);

if (argv.id < 4){

	let buscarCurso = cursos.find(function(idCurso ) {
	return idCurso.id == argv.id})


//const fs = require('fs');
let crearArchivo = (argv,buscarCurso) =>{
	texto = 'Id del Curso: ' + argv.id +
			'<br/>Nombre del alumno: ' + argv.nombre +
			'<br/>Cedula: ' + argv.cedula +
			'<br/>Nombre del Curso: ' + buscarCurso.nombre +
			'<br/>Duracion: ' + buscarCurso.duracion + ' horas' +
			'<br/>Valor: ' + buscarCurso.valor

	    //fs.writeFile('matricula.txt', texto, (err) =>{
		//if (err) throw (err);
		//})
		
		app.get('/', function (req, res) {
  			res.send(texto)
		})
		
		//console.log('\n'+'Se ha creado el archivo') 
		
}
crearArchivo(argv,buscarCurso);
console.log('\n'+'En el navegador se muestran los datos') 

app.listen(3000)

console.log('\n');
console.log('DATOS CURSO INSCRITO');
console.log(buscarCurso);

}else{

	console.log('\n');
	console.log('EL ID '+ argv.id + ' NO EXISTE EN LOS CURSOS');
}


console.log('\n');
console.log('LISTADO DE CURSOS');
console.log(cursos);

}

