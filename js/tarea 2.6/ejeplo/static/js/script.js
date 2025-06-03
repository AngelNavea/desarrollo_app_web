let array = ["xbox","nintendo"];


function usarSush() {
    let entrada =prompt("agregar una consola: ");  
    array.push(entrada);
    alert ("el nuevo arreglo es: "+ array.join(" - "));
}

function usarPop() {
    let basurero = array.pop();
    alert(`elemento eliminado: ${basurero}`);
}

function usarUnshift() {
    let entrada =prompt("agregar una consola: ");  
    array.unshift(entrada);
    alert ("el nuevo arreglo es: "+ array.join(" - "));
}

function usarShift() {
        let basurero = array.shift();
    alert(`elemento eliminado: ${basurero}`);
}
