var contador = 0;// al ser declarada como var, podrá ser utilizada en distintos bloques

//Obteniendo un único elemento HTML por el atributo id
//Más información: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
function probandoSeleccionID(){
    alert("SELECCIONA: getElementById. Obtiene un único elemento. Se cambiará el título de la página");
    
    const title = document.getElementById("titulo");
    title.innerHTML = "Este es otro titulo, cambiado desde javascript";

    alert("SELECCIONA: getElementById. Obtiene un único elemento. se cambiará la descripción");
    const descripcion = document.getElementById("parrafo1");
    descripcion.innerHTML = "Este es otra descripción, cambiada desde javascript";

    alert("Obtiene el bloque DIV que contiene el titulo h3 y la lista de las sintaxis javascript. Alterna el display");
    const bloqueDIV = document.getElementById("bloqueDIVSintaxisJS");
    if(bloqueDIV.style.display == 'none')bloqueDIV.style.display = 'block';
    else bloqueDIV.style.display = 'none';
    
}

//Obteniendo varios elementos HTML, todos los que tengan el nombre dado como valor del atributo name
//Más info: https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
function probandoSeleccionName(elementoActual){    
    alert("SELECCIONA: document.getElementsByName.\n Obtienen todos los elementos que el valor del atributo nombre es \"prueba\" y le agrega ..[index] en su value y muestra por consola");
    alert("this, el elementoActual (parametro) es \n\n"+elementoActual.outerHTML);
    const nombres = document.getElementsByName("prueba");
    for (let index = 0; index < nombres.length; index++) {
        let element = nombres[index];
        element.value = element.value+".."+index;
        
        if(element.classList.contains("btn-info")){            
            element.classList.remove("btn-info");//saco la clase btn-info
            element.classList.add("btn-outline-info");//agrego clase btn-outline-info
        }else if(element.classList.contains("btn-outline-info") ){
            element.classList.remove("btn-outline-info");//saco clase btn-outline-info
            element.classList.add("btn-info");//agrego clase btn-info (botones chicos)
        }

        console.log(element);    
    }
}

    //Obteniendo varios elementos HTML, todos los que tengan cierto class (puede tener otros pero debe tener el dado)
    //Más info:https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
function probandoSeleccionClassName(){
    alert("SELECCIONA: document.getElementsByClassName.\n Obtienen todos los elementos button DEBIDO A QUE TODOS TIENEN LA CLASE BTN. Al boton rojo lo pasa a azul (agregando y sacando clases)");
    const itemsCarrousel = document.getElementsByClassName("btn");
    for (let index = 0; index < itemsCarrousel.length; index++) {
        let element = itemsCarrousel[index];
        element.classList.add("btn-sm");//agrego clase btn-sm (botones chicos)
        if(element.classList.contains("btn-danger")){
            element.classList.remove("btn-danger");//agrego clase btn-sm (botones chicos)
            element.classList.add("btn-primary");//agrego clase btn-sm (botones chicos)
        }
        console.log(element);
        
    }
}

//Obteniendo varios elementos HTML, todos los que cumplan con cierta etiqueta
//Más info: https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
function probandoSeleccionTagName(){
    alert("SELECCIONA: document.getElementsByTagName.\n Obtienen todos los elementos button, alerta un contador y muestra por consola");
    const elementoEtiquetas = document.getElementsByTagName("button");
    contador++;
    for (let index = 0; index < elementoEtiquetas.length; index++) {
        let element = elementoEtiquetas[index];        
        console.log(element);        
    }
    alert("contador:"+contador);
}

//Obteniendo el primer elemento HTML, de todos los que cumplan la condicion
//Más información: https://www.w3schools.com/jsref/met_document_queryselector.asp
function probandoSeleccionQuerySelector(){
    alert("SELECCIONA: document.querySelector \nEj: Obtiene una lista (<ul>) y muestra sus hijos");
    
    const list = document.querySelector("ul");
    console.log(list.childElementCount);
    for (let index = 0; index < list.children.length; index++) {
        const element = list.children[index];
        console.log(element);
    }

    list.lastElementChild.innerHTML = list.lastElementChild.innerHTML + " <strong>y se hace agregando dos barras invertidas (//) o una barra seguida de asterisco (/*) y finaliza al reves (*/)</strong>";

    console.log(list.firstElementChild);
    console.log(list.lastElementChild.innerHTML);
}

//Obteniendo los elementos HTML que cumplan la condicion
//Más información: https://www.w3schools.com/jsref/met_document_queryselectorall.asp
function probandoSeleccionQuerySelectorAll(){
    alert("SELECCIONA: document.querySelectorAll\nObtiene los items impares y se les pondrá el color rojo al texto.");
    const itemsJS = document.querySelectorAll("#bloqueDIVSintaxisJS > ul > li:nth-child(odd)");//odd even: par, impar
    for (let index = 0; index < itemsJS.length; index++) {
        const element = itemsJS[index];
        element.style.color = "red";
    }

    alert("SELECCIONA: document.querySelectorAll\nObtiene los botones por la clase.");
    const itemsBotones = document.querySelectorAll(".btn");
    for (let index = 0; index < itemsBotones.length; index++) {
        const element = itemsBotones[index];
        element.classList.add("btn-lg");//agrego clase btn-lg (botones grandes)
        element.classList.remove("btn-sm");//saca clase btn-sm (botones chicos)
    }


} 


