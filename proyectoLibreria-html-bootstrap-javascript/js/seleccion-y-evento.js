/*

console.log("hola esto es javascript desde un archivo");

let contenedor = document.querySelector(".container-fluid");
//querySelector selecciona un solo elemento (el primero).

console.log(contenedor);

let enlaces = document.querySelectorAll("a");//obtengo los enlaces, los links
//querySelectorAll selecciona todos los elementos que cumplen con la selección.

console.log(enlaces);

enlaces.forEach(function (link){
    console.log(link);
});

*/

let item = document.querySelectorAll("li");

item.forEach(function(li){
    li.addEventListener('click', function(){
        console.log("cliqueo");
        //console.log(this);
    });
}
);


//esta selección y control lo hace siempre
let iconosEstrellaLlena = document.querySelectorAll("td.estrellasdecategorias > i");

iconosEstrellaLlena.forEach(function(estrella){
    //console.log(estrella);
    //console.log(estrella.className);   
    estrella.addEventListener('click', function(){
        if(estrella.classList.contains("bi-star-fill")){
            estrella.classList.remove("bi-star-fill");
            estrella.classList.add("bi-star");
        }else{
            estrella.classList.add("bi-star-fill");
            estrella.classList.remove("bi-star");
        }        
    });
}
);


/*
En html agregar en la tabla:

en el encabezado de la tabla, agregar:
 
    <th>CALIFICACIÓN</th>

y en los datos de cada fila, agregar:

    <td class="estrellasdecategorias">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
    </td>
                

*/