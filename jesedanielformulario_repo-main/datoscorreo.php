<?php
$destino= $correo=$_POST["correo"];
$nombre =$_POST["nombre"];
$apellido =$_POST["apellido"];
$identidad =$_POST["identidad"];
$fechanacimiento=$_POST["fechanacimiento"];
$contenido="Bienvenido (A): ", + $nombre + $apellido + "\n Identidad: " + $identidad + "\n Fecha de nacimiento: " + $fechanacimiento + "\n Correo: " + $correo  ;
mail($destino, "Te has registrado correctamente" , $contenido);
header("location:index.php");
?>