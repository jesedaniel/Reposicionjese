//(funcion)(){
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');
function validarNombre(e){
    if(nombre.value == '' || nombre == null){
        console.log('Completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Nombre</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarApellido(e){
    if(nombre.value == '' || apellido == null){
        console.log('Completa el apellido');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Apellido</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarFechaNacimiento(e){
    if(nombre.value == '' || fechanacimiento == null){
        console.log('Completa el apellido');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa tu fecha de nacimiento</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}


function validarCorreo(e){
     if(correo.value == '' || correo == null){
        console.log('Completa el correo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Email</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Acepta Los Terminos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Acepta Los Terminos</li>';
        e.preventDefault();
    }else if(nombre.value == '' || nombre == null || correo.value == '' || correo == null){
    error.style.display='block';
}
}

function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarNombre(e);
   validarApellido(e);
   validarFechaNacimiento(e);
   validarCorreo(e);
   validarTerminos(e);
}


formulario.addEventListener('submit', validarForm);

//}())


/////peticiones 
function registrarse(){
    console.log("entro");
    let parameters = $("#formulario").serialize();
    console.log(parameters);
    $.ajax({
        url:"ajax/form.php?accion=SetData",
        method:"POST",
        data: parameters,
        //dataType:"json",
        success:function(answer){
            console.log(answer);
        },
        error:function(answer){
            console.log("Error");
        }
    });
   $.ajax({
        url:"ajax/form2.php",
        method:"POST",
        data: parameters,
        //dataType:"json",
        success:function(answer){
            //console.log(answer);
        },
        error:function(answer){
            console.log("Error");
        }
    });
}

$(document).ready(function(){
    $.ajax({
        url:"ajax/form.php?accion=GetData",
        method:"POST",
        dataType:"json",
        //data: dataLLave,
        success:function(answer){
            console.log(answer);
            for(var i=0;i<answer.length;i++){    
            $('#generateUser').append($(`
            <tr>
                <td>${answer[i].nombre}</td>
                <td>${answer[i].apellido}</td>
                <td>${answer[i].identidad}</td>
                <td>${answer[i].fechanacimiento}</td>
                <td>${answer[i].correo}</td>
            </tr>
        `));
            }
        }/*,
        error:function(answer){
            console.log("Error");
        }*/
    });
})
