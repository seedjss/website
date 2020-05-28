<?php

$email=$_GET['email'];
/**
 * This example shows sending a message using PHP's mail() function.
 */
//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom('no-reply@seedjss.ml', 'S.E.E.D (Electrino)');
//Set an alternative reply-to address
$mail->addReplyTo('electrino@jssaten.ac.in', 'First Last');
//Set who the message is to be sent to
$mail->addAddress($email);
//Set the subject line
$mail->Subject = 'Certificate for AndroCar and AI Workshop September,2019';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually

//$mail->AltBody = 'This is a plain-text message body';

//Attach an image file
$mail->addAttachment('certificate.jpg');
//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}