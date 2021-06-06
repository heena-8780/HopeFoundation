<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "heena.kasali.10@gmail.com";
$subject = "Mail from Hope Foundation";
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Message = " . $message;
$headers="From: noreply@hopefoundation.com";
if($email!=NULL){
	mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html")
?>