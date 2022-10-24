document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
    
})


function validarFormulario(evento){
    evento.preventDefault();

    //Variables
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    let enviar = document.getElementById('enviar');

    //Enviar
    if(nombre === "" && correo === "" && mensaje === ""){
        
        swal("Oops...", "Debe completar los campos obligatorios", "error");
        return
    }else{
        
        swal("¡Enviado Correctamente!", "Muchas Gracias por contactarse", "success");
    }

    //Nombre
    if(nombre.length == 0){
        swal("Oops...", 'El campo nombre es obligatorio', "error");
        return;
    }
    if(nombre.length > 50){
        swal("Oops...", 'El campo nombre no puede contener más de 50 caracteres', "error");
        return;
    }

    //Correo
    if(correo.length == 0){
        swal("Oops...", 'El campo correo es obligatorio', "error");
        return;
    }

    //Mensaje
    if(mensaje.length == 0){
        swal("Oops...", "El campo mensaje es obligatorio", "error");
        return;
    }
    if(mensaje.length > 300){
        swal("Oops...", "El campo mensaje no puede contener más de 300 caracteres", "error");
        return;
    }

    
    
    this.submit();
    

}