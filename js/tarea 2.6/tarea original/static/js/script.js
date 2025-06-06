
/*ejercicio 1*/
let compras = [];

function lista_compra() {
    compras.push("pan","leche","huevo");
    alert (`arreglo inicial: ${compras.join(" - ")}`);
}

/*ejercicio 2*/
function tachado_compra() {
    let tachados = compras.pop();
    alert(`elemento eliminado: ${tachados}`);
}

/*ejercicio 5*/
let colores = ["rojo", "azul"];

function agregar_amarillo() {
    colores.unshift("amarillo");
    alert (`arreglo inicial: ${colores.join(" - ")}`);
}

/*ejercicio 4*/
function borrar_color() {
    let BC = colores.shift();
    alert(`elemento eliminado: ${BC}`);
}

/*ejercicio 5*/
let numeros = [10, 20, 30];

function agregar_numeroF() {
    numeros.push(40);
    alert (`numeros: ${numeros.join(" - ")}`);
    console.log(numeros);
}

function borrar_numeroI() {
    let BRI = numeros.shift();
    alert(`numero borrado: ${BRI}`);
    console.log(numeros);
}

function agregar_numeroI() {
    numeros.unshift(5);
    alert (`numeros: ${numeros.join(" - ")}`);
    console.log(numeros);
}

function borrar_numeroF() {
    let BRF = numeros.pop();
    alert(`numero borrado: ${BRF}`);
    console.log(numeros);   
}

/*ejercicio 6*/
let orden=[];

function agregar_numeros_orden() {
    orden.unshift(1,2,3);
    alert (`numeros: ${orden.join(" - ")}`);
    console.log(orden);
}

/*ejercicio 7*/
let historial = [];

function agreagra_y_eliminar_mensajes() {
    let agregacion_historial_primero =prompt("agregar primer mensaje del historial: ");
    let agregacion_historial_segundo =prompt("agregar segundo mensaje del historial: ");
    let agregacion_historial_tercero =prompt("agregar tercer mensaje del historial: ");
    historial.push(agregacion_historial_primero,agregacion_historial_segundo);
    let borrar_ultimo_mesaje = historial.pop();
    alert (`mensaje eliminado: ${borrar_ultimo_mesaje}`);
}

/*ejercicio 8*/
let cola = ["Cliente1", "Cliente2", "Cliente3"];

function cola_clientes() {
    cola.push("Cliente4");
    let eliminacion_ciente = cola.shift();
    alert (`cola de clientes: ${cola}`);
}

/*ejercicio 9*/
let nombres = ["Pedro", "Juan", "Luis"];

function agregacion_y_elinacionN() {
    let elinimacion_de_pedro = nombres.pop();
    nombres.unshift("Mateo");
    nombres.push("Ana")
    alert (`cola de clientes: ${nombres}`);
}








