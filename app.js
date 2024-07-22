
/*let parrafo = document.querySelector('p'); // forma manual de hacer cambios
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto){ // función para hacer cambios en el HMTL con el DOM

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`); // operador ternario "?" es equivalente a if y ':' a else
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){

            asignarTextoElemento('p', 'El número secreto es menor'); 
        }else{

            asignarTextoElemento('p', 'El número secreto es mayor'); 
        }
        intentos ++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){

    document.getElementById('valorUsuario').value = '';

}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los números
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales(); 
    //Deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
   
}
condicionesIniciales();


