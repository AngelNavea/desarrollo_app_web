//prueba de conexion js
console.log("conexion establecida con js");

//numeroEntero

let num =25;

function operacion(){
    return num;
}
console.log(operacion());

//numeroDecimal

let number=3.14;

function mostrarDecimal(){
    return number;
}
console.log(mostrarDecimal());

//cadenaTexto

let texto="Hola mundo";

function returntexto(){
    return texto;
}
console.log(returntexto());

//valorBooleano

let boolean= true;

function returnbolean(){
    return boolean;
}
console.log(returnbolean());

//arregloNumeros
let Arreglo= [1,2,3,4];

function returnArreglo(){
    return Arreglo;
}
console.log(returnArreglo());

//objetoPersona

let Persona= {
    nombre: "angel",
    edad: 16
};  

function returnPersona(){
    return Persona;
}
console.log(returnPersona());

//valorIndefinido

let infi;

function returninfi(){
    return infi;
}

console.log(returninfi())

//valorNulo

let nulo =null;

function returnnulo(){
    return nulo;
}
console.log(returnnulo())

//identificadorUnico

let identidad= Symbol("id")

function returnidentidad(){
    return identidad;
}
console.log(returnidentidad())

//numeroGrande

let numgrande = BigInt(222222222)

function returnnumgreande(){
    return numgrande;
}

console.log(returnnumgreande())

//mes contante

const mes="mayo";

function returnmes(){
    return mes;
}

console.log(returnmes())

//operacion

function operacion(){
    return 1 + 2
}

console.log(operacion())
