const list=[
    {id:1,name:'Juan Perez',nota1: 5,nota2: 7,nota3: 9, status:'Aprobado'},
    {id:2,name:'Pablo',nota1:8,nota2:2,nota3:6,status:'Desaprobado'},
    {id:3,name:'Agostina Perez',nota1:10,nota2:9,nota3:10,status:'Aprobado'},
    {id:4,name:'Rocio Fernandez',nota1:8,nota2:6,nota3:5,status:'Aprobado'},
    {id:5,name:'Javier Gonzalez',nota1:5,nota2:3,nota3:6,status:'Desaprobado'},
]

class Ratings{
    constructor(list){
        this.list=list;
    }
    addStudent(student){
        let id = this.list.length + 1;
        student.id= id;
        const status = this.getStudentAverage(student.nota1, student.nota2, student.nota3);
        student.status=status;
        this.list.push(student);
    }
    getStudentAverage(nota1, nota2, nota3){
        const average = ( nota1+ nota2+ nota3) /3;
        if( average >=6){
            return 'Aprobado'
        }else{
            return 'Desaprobado'
        }
    }
    getStudentById(id){
        const student= this.list.find( item => item.id === id );
        return student ? student : 'Estudiante no encontrado'
}
    getStudentByStatus(status){
        const list = this.list.filter( item=> item.status === status);
        return list;
    }
    getStudentByName(name){
        const list = this.list.filter( item => item.name.toLowerCase().includes( name.toLowerCase()) );
        console.table(list);
        return list;
    }
    showStudents(){
        console.table(this.list)
    }
}
    
const libro = new Ratings(list);
//const id = parseInt( prompt('Ingrese el ID'))
//const estudiantes = libro.getStudentById(id)
const filtrados = libro.getStudentByStatus('Aprobados');
console.table(filtrados);
do{
    nombre = prompt('Nombre');
    if(! validarnombre(nombre)){
        alert('Nombre Invalido');
     }
}while(! validarnombre(nombre))

do{
    nota1= parseFloat( prompt('nota 1'));
    nota2= parseFloat( prompt('nota 2'));
    nota3= parseFloat( prompt('nota 3'));

    libro.addStudent( {name: nombre, nota1: nota1, nota2:nota2, nota3:nota3} );
    libro.showStudents();
    nombre = prompt('Nombre');
} while( nombre.toLocaleLowerCase () != 'salir')

   

function validarnombre(nombre){
    if( nombre == '' || (nombre.length < 3) ){
        return false;
    } else{
        return true;
    }

}
function validarnota(nota){
    if( (nota >= 1) && (nota <= 10) && !isNaN(nota) ){
        return true;
    }
    else {
        return false;
    }
}
