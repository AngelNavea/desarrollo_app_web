let compras = [];
let colores = ["rojo", "azul"];

function lista_compra() {
    compras.push("pan","leche","huevo");
    alert (`arreglo inicial: ${compras.join(" - ")}`);
}

function tachado_compra() {
    let tachados = compras.pop();
    alert(`elemento eliminado: ${tachados}`);
}

function agregar_amarillo() {
    colores.unshift("amarillo");
    alert (`arreglo inicial: ${colores.join(" - ")}`);
}

function borrar_color() {
    let BC = colores.shift();
    alert(`elemento eliminado: ${BC}`);
}




