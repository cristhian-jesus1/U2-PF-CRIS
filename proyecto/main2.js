// variables

let targetaDestapadas = 0;
let targeta1 = null;
let targeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let incrementarMovimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivo = null;
let bloquearTargeta;



// Seleccionamos todos los botones 
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        destapar(button.id)
    })
});

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');


// generacion de numeros aleatorios
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => { return Math.random() - 0.5 })
console.log(numbers);

// funcciones
function contarTiempo() {
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(tiempoRegresivo);
            bloquearCard();
        }
    }, 1000);
}
function bloquearCard() {
    for (let i = 0; i <= 15; i++) {
        bloquearTargeta = document.getElementById(i);
        bloquearTargeta.innerHTML = `<img src="./assets/${numbers[i]}.png" alt="">`;
        bloquearTargeta.disabled = true;
    }
}

// Funcion principal 

function destapar(id) {
    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }

    targetaDestapadas++;
    // console.log(targetaDestapadas);

    if (targetaDestapadas == 1) {
        // mostrar primer numero
        targeta1 = document.getElementById(id);
        primerResultado = numbers[id];
        targeta1.innerHTML = `<img src="./assets/${primerResultado}.png" alt="">`;
        // console.log(primerResultado);
        // deshabilitar primer numero
        targeta1.disabled = true;
        incrementarMovimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

    } else if (targetaDestapadas == 2) {
        targeta2 = document.getElementById(id);
        segundoResultado = numbers[id];
        targeta2.innerHTML = `<img src="./assets/${segundoResultado}.png" alt="">`;

        targeta2.disabled = true;

        incrementarMovimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

        if (primerResultado == segundoResultado) {
            targetaDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            // si los numeros son iguales restamos un movimiento
            incrementarMovimientos--;
            mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos}`;

            if (aciertos == 8) {
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}  crack!`;
                mostrarTiempo.innerHTML = `Crack!  Tardaste solo ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${incrementarMovimientos} crack!`;
            }

        } else {
            setTimeout(() => {
                targeta1.innerHTML = '';
                targeta2.innerHTML = '';
                targeta1.disabled = false;
                targeta2.disabled = false;
                targetaDestapadas = 0;
            }, 600);
        }
    }
}




