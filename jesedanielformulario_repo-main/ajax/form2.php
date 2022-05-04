<?php
        $nombre= $_POST['nombre'];
        $apellido= $_POST['apellido'];
        $direccionEmail= $_POST['correo'];
        $body = "Estimado Sr: ".$nombre." ".$apellido." , Este es el correo de confirmación de que todo se puede, se ha registrado correctamente a nuestro sitio web, Alumno: Jese Daniel Aguilar, Numero de cuenta: 20141012902";
    
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
    
        require 'PHPMailer/Exception.php';
        require 'PHPMailer/PHPMailer.php';
        require 'PHPMailer/SMTP.php';
    
        $mail = new PHPMailer(true);
    
            try {
                //Server settings
                $mail->SMTPDebug = 2;                                       // Enable verbose debug output
                $mail->isSMTP();                                            // Set mailer to use SMTP
                $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'CarlosDeveloper2021@gmail.com';                     // SMTP username
                $mail->Password   = 'Prueba_1234';                               // SMTP password
                $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
                $mail->Port       = 587;                                    // TCP port to connect to
        
                //Recipients
                $mail->setFrom('draguilar58@gmail.com', 'App Formulario');
                $mail->addAddress($direccionEmail, $nombre);     // Add a recipient
                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'Bienvenida nuestro App';
                $mail->Body    = $body;
        
                $mail->send();
                echo 'Envio Exitoso';
            } catch (Exception $e) {
                echo "Ha ocurrido un error: {$mail->ErrorInfo}";
            }
?>