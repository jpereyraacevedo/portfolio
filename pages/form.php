<?php

$nombre = $_POST["name"];
$mail = $_POST["email"];
$textarea =$_POST["textarea"];

$textarea = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$textarea .=  "Su email es " . $mail . " \r\n";
$textarea .= "El asunto es " . $asunto . " \r\n";
$textarea .= "Mensaje: " . $_POST["textarea"] . " \r\n";
$textarea .= "Enviado el " . date("d/m/y", time());


$destinatario = "jpereyraacevedo@gmail.com"
$asunto = "Este mail fue enviado desde el portfolio"

mail($destinatario, $asunto, utf8_decode($textarea), $header)
header("Location:index.tsx")

?>
