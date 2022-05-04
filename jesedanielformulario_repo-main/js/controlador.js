/*$(document).ready(function(){
	console.log("El DOM ha sido cargado, debe cargar todos los tweets e imprimirlos tal y como lo muestrael html estatico");
});

$(document).ready(function() {
    console.log("generar select usuario");
    $.ajax({
		url:"ajax/Usuario.php?hacer=leer",
		dataType:"json",
        method : "POST",
		success:function(res){
            console.log(res);
            for (var i = 0; i <res.length; i++) { 
                $("#slc-usuario").append(`
				<option value="${res[i].usuario}">${res[i].nombre}</option>`);
            }
		}
	});
	console.log("generar");
    $.ajax({
		url:"ajax/Tweet.php?accion=generar_post",
		dataType:"json",
    method : "POST",
		success:function(res){
            console.log(res);
            for (var i = 0; i <res.length; i++) { 
				$("#tweets").append(`
				<div class="row component text-left">
                  <div class="col-lg-2">  
                    <img src = "${res[i].usuario.urlImagen}" class="img-fluid rounded-circle img-thumbnail">
                  </div>
                  <div class="col-lg-10">
                    <b>${res[i].usuario.nombre}</b> ${res[i].usuario.usuario}
                    <div class="tweet-content">
						${res[i].usuario.tweet}
                        <div>
                            <small class="blue-text">${res[i].hashtags}</small>
                        </div>
                    </div>
                  </div>
              </div>`);
            }
		},
		error:function(	error){
			console.log(error);
		}
	});
	$.ajax({
		url:"ajax/Trending.php?hacerrr=generar_tren",
		dataType:"json",
        method : "POST",
		success:function(res){
            console.log(res);
            for (var i = 0; i <res.length; i++) { 
				$("#tren").append(`
				<div><span class="blue-text">${res[i].trending}</span> <small>${res[i].tweets} tweets</small></div>
			  `);
            }
		},
		error:function(	error){
			console.log(error);
		}
	});
});
$("#slc-usuario").change(function(){
	var parametro=
	'usuario='+$("#slc-usuario").val();
	console.log("entro a cambio de usuario "+parametro);
	$.ajax({
		url:"ajax/Usuario.php?hacer=infoUsuario",
		dataType:"json",
		method:"POST",
		data:parametro,
		success:function(res){
			
			console.log(res);
			
				$("#info_usuario").html(`
				<div class="component-header" >
					<img src = "${res[0].urlImagen}" class="img-fluid rounded-circle img-thumbnail">
				</div>
				<hr>
				<h2 class="blue-text">${res[0].nombre} ${res[0].apellido}</h2>
				<small>${res[0].usuario}</small>
				<hr>
                <div class="row">
					<div class="col-lg-4">
					Tweets<br>
					<span class="blue-text">${res[0].tweets}</span>
					</div>
					<div class="col-lg-4">
					Following<br>
					<span class="blue-text">${res[0].followers}</span>
					</div>
					<div class="col-lg-4">
					Followers<br>
					<span class="blue-text">${res[0].following}</span>
					</div>
				</div>
				`);
		},
		error:function(error){
			console.log(error);
		}
	});
});
$("#button-Tweet").click(function(){
	var parametro=
	('usuario=')+$("#slc-usuario").val()+"&"+
	('tweet=')+$("#textarea_Tweet").val()+"&"+
	('hashtags=')+$("#text_Hashtags_Tweet").val();
	console.log(parametro);
	$.ajax({
		url:"ajax/Usuario.php?hacer=guardar",
		dataType:"json",
		method:"POST",
		data:parametro,
		success:function(res){
		},
		error:function(res){
			console.log(error);
		}
	});
});*/
$("#navbarDropdown1").click(function(){	
		$("#despligue").html(`
		<div class="dropdown-menu show" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
		`);
});