// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let minuscula = ""

function contieneNumero () {
    let prueba = document.getElementById ('amigo').value
    var especial = /[^A-Za-z 0-9]/g;
    return especial.test (prueba)
    
}

function agregarNombre (){
    amigos.push (minuscula);
    document.getElementById ('amigo').value = '';
    }

function validarElNombre () {
    minuscula = document.getElementById ('amigo').value;
    minuscula = minuscula.toLowerCase()
    contieneNumero ()
    if (document.getElementById ('amigo').value == ''){ 
        alert ("Por favor, inserte un nombre.");
   
    }else if (contieneNumero () == true)  {
        alert ("Por favor, ingrese solo letras.");
        document.getElementById ('amigo').value = '';
    
    }else if  (amigos.includes (minuscula)){
        alert ("Ingrese un nombre diferente.");
            document.getElementById ('amigo').value = '';
        
    }else {

        agregarNombre();
        console.log (amigos);
    }

}