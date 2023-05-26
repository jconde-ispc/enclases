console.log("2 - hola esto es javascript desde un archivo (iniciando.js)");

//1 - COMENTARIOS EN JAVASCRIPT
/* Cuando inicia con barra invertida asterisco y cierra con asterisco y barra invertida: 
        es un comentario que puede ser de varias líneas*/

//Cuando inicia con dos barras invertidas: es un comentario de linea   

//2 - MOSTRANDO, SALIDAS EN JAVASCRIPT
/* Funcion en javascript que se llama "mensajeInicial", recibe como parametro un valor en "mensajeBienvenida".
    La funcion pedira al usuario un valor (prompt) */
function mensajeInicial(mensajeBienvenida){   

    //obtiene un valor qu es pidido al usuario completar
    let nombre = prompt("Por favor, ingresa tu nombre");
    //en la variable "mensaje" armamos una concatenación de textos fijos (strings) con variable (nombre) y parametro (mensajeBienvenida)   
    let mensaje = "Hola "+nombre+" "+mensajeBienvenida;

    //Muestra en una ventana el mensaje 
    alert(mensaje);
    
    //muestra el mismo mensaje que fue alertado, pero por consola
    console.log(mensaje);

    //deja el mismo mensaje en el parrafo de id "parrafo1"
    document.getElementById("parrafo1").innerHTML = mensaje;
}

//3 - VARIABLES Y CONSTANTES
function variablesyConstantes(){
    var x = 1;//variable de todo el contexto (ámbito, scope) (https://www.w3schools.com/js/js_variables.asp)
    let y = 2;//variable de este contexto, de un bloque (ámbito, scope) (https://www.w3schools.com/js/js_let.asp)
    const mensaje = "Hola";//constante, de este contexto (bloque) (https://www.w3schools.com/js/js_const.asp)

    console.log("x + y es:"+ x+y);//aca concatena
    console.log("x + y es:"+ (x+y));//aca obligo a realizar suma y luego concatenar

    //Si descomento esto va a dar error
    //mensaje = "hello!!!";//una constante NO puede cambiar de valor 

    console.log(mensaje);
}

//4 - CONDICIONAES Y BUCLES
function condicionalYBucle(){
    let index = 1;
    const LIMITE = 10;

    //Condicional
    if(index==1)console.log("En condicional inicial. index es 1");
    else console.log("En condicional inicial. index NO es 1");

    //bucle (mientras)
    while (index <= LIMITE) {//while tiene una condición de continuación. Mientras sea verdadero, hace todo lo que se encuentre dentro
        //Tips: siempre tenemos que observar que en algún momento cambie la condición de continuación, sino será ciclo infinito (se tilda el programa)
        console.log("contando...."+index);        
        index++;// incremento en 1 la variable (esto permite que en algún momento salga del ciclo, al llegar a 11 esta variable)
    }

    //Condicional
    if(index==1)console.log("En condicional final. index es 1");
    else console.log("En condicional final. index NO es 1, es:"+index);

}

function bucleFOR(){
    const LIMITE = 10;

    //for es otra forma de iterar (ciclar). Tiene tres partes (INICIALIZACIÓN ; CONDICIÓN DE CONTINUACIÓN ; AVANCE)
    // en este caso la INICIALIZACIÓN es: let index = 1
    // la CONDICIÓN DE CONTINUACIÓN es: index < LIMITE
    // el AVANCE es: index++  
    for (let index = 1; index <= LIMITE; index++) {// incremento en 1 la variable (esto permite que en algún momento salga del ciclo, al llegar a 11 esta variable)
        //Tips: siempre tenemos que observar que en algún momento cambie la condición de continuación, sino será ciclo infinito (se tilda el programa)
        console.log("contando...."+index);
    }    
}

// -5 EXTRA - MANEJO DE ERRORES (TRY - CATCH - FINALLY - THROW)
/* Funcion que pide un valor del 1 al 10. Ejemplo de uso de manejo de excepciones.
    Más información al manejo de error: https://www.w3schools.com/js/js_errors.asp */
function condicionalBucleyManejoErrores(){
    let mensaje = "";
    let ingresoNumero = false;

    while(!ingresoNumero){
        let numero = prompt(mensaje+" Por favor, ingrese un numero del 1 al 10");

        try { //permite definir un bloque de código para probar errores mientras se ejecuta.
            if(numero == "")  throw "no se ingreso ningún dato, es vacio";// throw:  define un error personalizado y lanza la excepción.
            if(isNaN(numero)) throw "lo que se ingreso ("+ numero +") no es un número";
            numero = Number(numero);
            if(numero < 1) throw "el número ("+ numero +") es mas chico que 1";
            else if(numero > 10) throw "el número ("+ numero +") es más grande que 10";
            else{
                alert("Elegiste el número:"+numero+". Muchas gracias");
                ingresoNumero = true;
            } 
          }
          catch(err) { //permite definir un bloque de código que se ejecutará si ocurre un error en el bloque de prueba (captura la excepción)
            mensaje = "ATENCIÓN!!! " + err;
          }
    }//cierra el while


    for (let index = 1; index <= numero; index++) {//ACA  "numero" dara error ya que esta definido dentro del bloque del ciclo
        console.log("contando...."+index);        
    }

}