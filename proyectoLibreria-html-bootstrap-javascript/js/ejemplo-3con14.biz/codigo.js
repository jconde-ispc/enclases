

var respuesta = document.getElementById('resultado');

function MostrarEnlaces(){
 var enlace  = document.getElementsByTagName('a');
 var boton   = document.getElementById('boton');
 var parrafo = document.getElementById('p1');
 var imagen  = document.getElementById('img1');

 var men = '';
 respuesta.innerHTML  = 'url del enlace: ' + enlace[0].href +'<br>';
 respuesta.innerHTML += 'target del enlace: ' + enlace[0].target +'<br>';
 respuesta.innerHTML += 'class del boton: ' + boton.className  +'<br>';
 respuesta.innerHTML += 'text-align del párrafo: ' + parrafo.style.textAlign +'<br>';
 respuesta.innerHTML += 'src de la imagen: ' + imagen.src +'';
 }


 function ponerParrafo(){
    var lorem       = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
    var main        = document.getElementById('main');
    var parrafo     = document.createElement('p');
    var linea       = document.createElement('hr');
    var textoLorem  = document.createTextNode(lorem);

    parrafo.appendChild(textoLorem);
    main.appendChild(parrafo);
    main.appendChild(linea);
  }
 


document.body.classList.add('miClase');
document.body.classList.remove('miClase');     // []
console.log(document.body.classList);          // ['miClase1','miClase2',...]
document.body.classList.contains('miClase');  // true
document.body.classList.contains('3con14');   // false
document.body.classList.toggle('miClase');     // la añade
document.body.classList.toggle('miClase');     // la quita

