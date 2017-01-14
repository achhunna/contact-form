<?php

$name = $_POST['name'];
$email = $_POST['email'];
$to_email = $_POST['to_email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


echo send_email( $to_email, $subject, $message, $email, $name );

function send_email( $to, $subject, $message, $from, $sender_name ) {
    $header = "From: " . $sender_name . "<" . $from .">";
    return mail( $to, $subject, $message, $header );
}

?>
