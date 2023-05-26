
/*FUNCION UTILIZADA EN CLIENTES.HTML */
function controlCuentasMail(){
    let email = document.getElementById("email");
    let email2 = document.getElementById("email2");
    let emailHelp2 = document.getElementById("emailHelp2");  
    
    if(email2.value!= ""){
        if(email.value != email2.value){        
            emailHelp2.innerHTML = "Las cuentas NO coinciden correctamente. Volver a ingresar";
            emailHelp2.style.color = "red";
            //email2.focus();
        }else{
            emailHelp2.innerHTML = "Las cuentas coinciden correctamente.";
            emailHelp2.style.color = "green";
        }
    }    
    
}


function controlyEnvio(){
    let email = document.getElementById("email");
    let email2 = document.getElementById("email2");    
    let emailHelp2 = document.getElementById("emailHelp2");  

    if(email.value != email2.value){        
        emailHelp2.innerHTML = "Las cuentas NO coinciden correctamente. Volver a ingresar";
        emailHelp2.style.color = "blue";
        email2.focus();
        return false;
    }else{
        alert("Todo listo, enviando....");
        document.formCliente.action = "https://www.w3schools.com/js/default.asp";    
        return true;    
    }
        
    
}

/*FUNCIONES UTILIZDAS EN LISTADOLIBROS.HTML */

function sumarProducto(idElemento, idValor){
    //console.log("sumar:"+idElemento+" y "+idValor);
    let valorlabelElegido = document.getElementById(idValor);
    let cantidadlabelElegido = document.getElementById(idElemento);    
    cantidadlabelElegido.innerHTML =  parseInt(cantidadlabelElegido.innerHTML) + 1;    
    //console.log(valorlabelElegido.innerHTML);
    //console.log(cantidadlabelElegido.innerHTML);
    actualizarCarrito(1, valorlabelElegido.value);
}

function restarProducto(idElemento, idValor){
    //console.log("restar:"+idElemento+" y "+idValor);
    let valorlabelElegido = document.getElementById(idValor);
    let cantidadlabelElegido = document.getElementById(idElemento);
    cantidadlabelElegido.innerHTML =  parseInt(cantidadlabelElegido.innerHTML) - 1;
    //console.log(valorlabelElegido.innerHTML);
    //console.log(cantidadlabelElegido.innerHTML);
    actualizarCarrito(-1, valorlabelElegido.value);
}

function actualizarCarrito(cantidad, valor){
    //console.log("actualizando carrito");
    //console.log(cantidad);
    //console.log(valor);
    valor = parseFloat(valor) * parseInt(cantidad);
    let elementoCantidadTotalProductos = document.getElementById("cantidadTotalProductos");
    let elementoTotalSumaProductos = document.getElementById("totalSumaProductos");
    
//    console.log(elementoCantidadTotalProductos.innerHTML);
//    console.log(elementoTotalSumaProductos.innerHTML);
    elementoCantidadTotalProductos.innerHTML = parseInt(elementoCantidadTotalProductos.innerHTML) + parseInt(cantidad);
    elementoTotalSumaProductos.innerHTML = parseFloat(elementoTotalSumaProductos.innerHTML) + valor;     
//    console.log(elementoCantidadTotalProductos.innerHTML);
//    console.log(elementoTotalSumaProductos.innerHTML);
}