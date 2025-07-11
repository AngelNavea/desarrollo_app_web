/* ✅ Ejercicio 1: Contador del 1 al
N Pide al usuario un número con
prompt() y usa un for para
mostrar los números del 1
hasta ese número.
 */

function contarHastaN(){
    let n = parseInt(prompt("Ingresa el número hasta donde quieres contar!"));
    let numeros = [];
    // Bucle for contar hasta N
    for (let i = 1; i <= n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado1").innerHTML =
    `<div class="resultado"><p>El conteo de 1 hasta ${n} es el siguiente:<br>
    <strong>${numeros.join(" - ")}</strong></p></div>`;
}

/* ✅ Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario
(uno por uno con prompt()) y muestra la suma
total en pantalla.
 */
function sumarNumeros(){
    let suma = 0, i = 0, arr = [];
    while (i < 5) {
        let num = parseFloat(prompt(`Numero ${i + 1}:`));
        arr.push(num);
        if (!isNaN(num)) {
            suma += num;
            i++;
        }
    }
    document.getElementById("resultado2").innerHTML =
    `<div class="resultado"><p>La suma de: ${arr.join(" + ")} es: <strong>${suma}</strong></p></div>`;
}

// ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.


numerosPares = [];
function pares(){
    numerosPares = [] // Reinicia el array
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0){
            numerosPares.push(i)
        }
    }
    document.getElementById("resultado3").innerHTML =
    `<div class="resultado"><p>Número pares del 1 al 20: <strong>{${numerosPares.join(", ")}}</strong></p></div>`;
}

// Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta
// regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
let lista = []
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un numero para la cuenta regresiva: "));
    if (numero === 0) {
        alert("Numero no valido");
    }
    while (numero >= 0) {
        // alert(numero);
        lista.push(numero);
        numero--;
    };
    document.getElementById("resultado4").innerHTML = `<p>${lista.join("- ")}</p>`;

};

/*✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.*/

function tabla_multiplicacion(){
    let resultado ="";
    let numero = parseInt(prompt("ingrese numero a multiplicar: "));
    for(let i = 1; i<= 10; i++){
        let mult = numero * i;
        resultado += `<p>${numero} X ${i} = ${mult}</p>`;
    }
    document.getElementById("resultado5").innerHTML = resultado;
}

/*✅ Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.*/
// let suma_acumulada= [];
// function sumar_hasta_cero(){
//     let suma= 0;
//     let numero;
//     suma_acumulada= [];
//     document.getElementById("resultado6").innerHTML = "";
//     while (true) {
//         dumero = parseFloat(prompt("introduce un numero para sumar(0 para parar): "));
//         if (isNaN(numero)){
//             document.getElementById("resultado6").innerHTML = `<p>por favor, introduce un numero valido.</p>`
//             return
//         }
//         if (numero=== 0){
//             break
//         }
//         suma += numero
//         suma_acumulada.push(numero)
//     }
//     document.getElementById("resultado6").innerHTML=`<p>numero sumados: <strong>${suma_acumulada.join(", ")}</strong><br>total acumulado: <strong>${suma}</strong></p>`

// }

let sumaAcumulada = [];
function sumarHastaCero(){
    let suma = 0;
    let numero;
    sumaAcumulada = [];
    document.getElementById("resultado6").innerHTML = "";
    while (true) {
        numero = parseFloat(prompt("Introduce un número para sumar (0 para terminar)"));
        if (isNaN(numero)){
            document.getElementById(resultado6).innerHTML =
            "<p>Por favor, introduce un número valido.</p>"
            return
        }
        if (numero === 0){
            break
        }
        suma += numero
        sumaAcumulada.push(numero)
    }
    document.getElementById("resultado6").innerHTML =
    `<p>Números sumados: <strong>${sumaAcumulada.join(", ")}
    </strong><br>Total acumulado: <strong>${suma}</strong></p>`
}

// ✅ Ejercicio 7: Mostrar letras de una palabra
// Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.
let deletreo =[];
function mostrarletras(){
    let palabra = prompt("escriba una palabra a deletrar: ");
    for(n= 1; n>=20; n++){
        deletreo =palabra
        
    }
}

