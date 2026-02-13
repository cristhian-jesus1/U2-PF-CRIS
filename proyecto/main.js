// variables

let targetaDestapadas = 0;
let targeta1 = null;
let targeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let incrementarMovimientos = 0;
let aciertos = 0;



// Seleccionamos todos los botones 
let buttons = document.querySelectorAll('button');
buttons.forEach( (button) =>{button.addEventListener('click',() =>{
        destapar(button.id)
    })
});

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');


// generacion de numeros aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers);

// Funcion principal 

function destapar(id) {
    targetaDestapadas++;
    // console.log(targetaDestapadas);

    if (targetaDestapadas == 1) {
        // mostrar primer numero
        targeta1 = document.getElementById(id);
        primerResultado = numbers[id];
        targeta1.innerHTML = primerResultado;

        // deshabilitar primer numero
        targeta1.disabled = true;
        incrementarMovimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

    } else if (targetaDestapadas == 2) {
        targeta2 = document.getElementById(id);
        segundoResultado = numbers[id];
        targeta2.innerHTML = segundoResultado;

        targeta2.disabled = true;

        incrementarMovimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

        if (primerResultado == segundoResultado){
            targetaDestapadas = 0;
            
            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos ${aciertos}`;

            // si los numeros son iguales restamos un movimiento
            incrementarMovimientos--;
            mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

        }

    }
}