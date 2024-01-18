let estudiante;
let nota1;
let nota2;
let nota3;
let promedio;
let estado;
let totalestudiantes;

function validarnota(nota){
    if( (nota >= 1) && (nota <= 10) && !isNaN(nota) ){
        return true;
    }
    else {
        return false;
    }
}

function validarnombre(nombre){
    if( nombre == '' || (nombre.length < 3) ){
        return false;
    } else{
        return true;
    }

}
function calcularpromedio(nota1, nota2, nota3){
   return ( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3;

}
function obtenerestado(promedio){
    if( promedio < 6){
        return 'Desaprobado 😪😥'
    } else if ( promedio >=6){
        return 'Aprobado 😆😃'
    }
}

totalestudiantes = parseInt( prompt(' ¿Cuantos estudiantes hay?') )

for( let i=1; i <= totalestudiantes; i++){

do{
    estudiante = prompt("Nombre del Estudiante");
    if ( ! validarnombre(estudiante)){
        alert('Nombre invalido')
    }
} while( ! validarnombre(estudiante) )

do{
    nota1 = prompt("Nota Primer Trimestre");
    if ( ! validarnota(nota1)){
        alert('Nota invalida')
    }
} while( ! validarnota(nota1) )

do{
    nota2 = prompt("Nota Segundo Trimestre");
    if ( ! validarnota(nota2)){
        alert('Nota invalida')
    }
} while( ! validarnota(nota2) )

do{
    nota3 = prompt("Nota Tercer Trimestre");
    if ( ! validarnota(nota3)){
        alert('Nota invalida')
    }
} while( ! validarnota(nota3) )

  promedio = calcularpromedio(nota1, nota2, nota3);
  estado = obtenerestado(promedio);

  let mensaje = estudiante + ' | ' + nota1 + ' | ' + nota2 + ' | ' + nota3 + ' | ' + '\n Promedio: ' + promedio + ' | ' + estado;

  console.log(mensaje);
  alert(mensaje);


}
    
    
