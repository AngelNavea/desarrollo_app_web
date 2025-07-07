// ✅ Ejercicio 1: Verificar mayoría de edad
// Crea una variable edad con un valor numérico.
// Si la edad es mayor o igual a 18, muestra "Acceso permitido".
// Si no, muestra "Acceso denegado".
function mayoria_edad(){
    let edad =parseInt(prompt("inglese edad: "));
    if (edad >= 18){
        document.getElementById("resultado").innerHTML =`<p>es mayor de edad: ${edad}</p>`;
    }
    else if(edad<= 17 && edad>=0){
        document.getElementById("resultado").innerHTML =`<p>es menor de edad: ${edad}</p>`;
    } 
    else{
        document.getElementById("resultado").innerHTML =`<p>valor <strong>${edad}</strong> es invalido</p>`;
    }  
}
// ✅ Ejercicio 2: Añadir producto si no está
// js
// let productos = ["pan", "leche", "queso"];
// Declara la variable nuevoProducto.
//  Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
//  Si ya está, muestra "Producto ya ingresado".

function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =`<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
    }

}

// ✅ Ejercicio 3: Control de tareas
// Declara el arreglo tareas con 6 tareas predefinidas.
// Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
// Si tiene 5 o menos, muestra "Lista aceptable".


function pendientes(){
    let tareas=["ingles","matematicas","lenguaje","programacion","filosofia","ciencias"]

    if (tareas.length >= 6){
        tareas.pop();
        document.getElementById("resultado").innerHTML =`<p>-<strong>${tareas.join(" - ")}-</strong> </p>`;
    }
    else if (tareas.length <=5){
        document.getElementById("resultado").innerHTML =`<p>-<strong>Lista aceptable-</strong> </p>`;
    }
}

/*✅ Ejercicio 4: Validar primer elemento
js
let cola = ["sinNombre", "Pedro", "Lucía"];

Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
Si no, muestra "Cola correcta".*/

function cola_personas(){
    let cola = ["sinNombre", "Pedro", "Lucía"];

    if (cola[0] === "sinNombre"){
        cola.shift();
        document.getElementById("resultado").innerHTML =`<p>-<strong>${cola.join(" - ")}-</strong> </p>`;
    }
    else{
        document.getElementById("resultado").innerHTML =`<p>-<strong>Cola correcta-</strong> </p>`;
    }
}

/*✅ Ejercicio 5: Saludo condicional
Declara la variable nombre.
Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
Si está vacío, muestra "Nombre no válido".*/ 

function saludo_persona(){
    let nombre = prompt("escriba su nombre: ");
    let saludos = ["hola"];
    saludos.push(nombre);
    document.getElementById("resultado").innerHTML =`<p><strong>-${saludos.join(" - ")} -</strong> </p>`;
    if (nombre==""){
        document.getElementById("resultado").innerHTML =`<p><strong>-Nombre no válido-</strong> </p>`;
    }
}

// ✅ Ejercicio 6: Calificar nota
// Declara la variable nota con un valor entre 1 y 7.
// Si nota >= 6: muestra "Excelente".
// Si nota >= 4: muestra "Aprobado".
// Si nota < 4: muestra "Reprobado".

function notas_calificacion(){
    let nota =prompt("ponga su nota: ");
    if (nota >= 6){
        document.getElementById("resultado").innerHTML =`<p><strong>-exelente-</strong> </p>`;
    }
    else if (nota >=4){
        document.getElementById("resultado").innerHTML =`<p><strong>-aprobado-</strong> </p>`;
    }
    else if (nota <4){
        document.getElementById("resultado").innerHTML =`<p><strong>-reprobado-</strong> </p>`;
    }
}

// ✅ Ejercicio 7: Registro de visitantes
// Crea un arreglo vacío visitas y una variable persona.
//  Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
//  Si está vacío, muestra "Error: nombre vacío".

