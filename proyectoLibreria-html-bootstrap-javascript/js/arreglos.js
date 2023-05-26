/**
 * EJEMPLOS DE ARREGLOS EN JAVASCRIPT
 *  **/


/** EJEMPLO 1 */
let arreglo = [1,2,3,4,5,6,7,8,9,0];

for(let i = 0;i < arreglo.length; i++){
    let element = arreglo[i];
    console.log(element);

 }
 
 arreglo.forEach(function(element){ console.log(element) });

 /** EJEMPLO 2 */
 let lenguajes = ["ruby","php","javascript","python"]

 lenguajes.forEach(
                function(element,indice){
                    console.log(element,indice) 
                }
            );
/** EJEMPLO 3 */
const frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.forEach(function(element, indice){ console.log(element+" en pos "+indice) });


let fruta = frutas.pop();//The pop() method removes the last element from an array.
console.log("La fruta del pop es: "+fruta);
frutas.forEach(function(element, indice){ console.log(element+" en pos "+indice) });

console.log("Hace push de la fruta Kiwi");
frutas.push("Kiwi");//The push() method adds a new element to an array (at the end):
frutas.forEach(function(element, indice){ console.log(element+" en pos "+indice) });

console.log("La longitud: "+frutas.length);
console.log("Buscando Pera: "+frutas.includes("Pera"));
console.log("Buscando Orange: "+frutas.includes("Orange"));

/*
Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ... 
 * 
*/

/** EJEMPLO 4 */
const numeros = [2,5,6];
console.log("ARREGLO INICIAL: "+numeros);
//map: crea un nuevo arreglo aplicando la función
let cuadrados = numeros.map(function (numero){
    return numero * numero;
});
console.log("ARREGLO DONDE CADA VALOR ES EL CUADRADO DE SU VALOR EN EL ARREGLO INICIAL:"+cuadrados);
cuadrados.forEach(function(element, indice){ console.log(element+" en pos "+indice) });