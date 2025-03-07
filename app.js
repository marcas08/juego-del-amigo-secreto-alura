// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables Globales
let amigos = []
let minuscula = ""

//Revisa si el nombre ingresado contiene numeros o caracteres especiales.
function contieneNumero () {
    let prueba = document.getElementById ('amigo').value
    var especial = /^(?! )(?!.* $)[0-9 *()\[\]'"\/.&–-]+$/gm;
    return especial.test (prueba)

    
}
//Agrega el nombre al arreglo amigos.
function agregarNombre (){
    amigos.push (minuscula);
    document.getElementById ('amigo').value = '';
    }

//Valida que solo puedan ingresar palabras al programa.
    function validarElNombre () {
    /*Transforma las palabras a minusculas para que el sistema 
    no permita el mismo nombre con letras mayusculas.*/
    minuscula = document.getElementById ('amigo').value;
    minuscula = minuscula.toLowerCase()
    contieneNumero ()
    
    //Evalua que no se haya ingresado el campo vacio
    if (document.getElementById ('amigo').value == ''){ 
        alert ("Por favor, inserte un nombre.");
   
    //Evalua si contiene numeros o caracteres especiales.
    }else if (contieneNumero () == true) {
        alert ("Por favor, ingrese solo letras.");
        document.getElementById ('amigo').value = '';
    
    //Evalua si el nombre ingresado ya se encuentra guardado.
    }else if  (amigos.includes (minuscula)){
        alert ("Ingrese un nombre diferente.");
            document.getElementById ('amigo').value = '';
        
    }else {
    
    //Si ninguna condicion anterior se cumple se procede a agregar el nombre al arreglo.
        agregarNombre();

    }

}