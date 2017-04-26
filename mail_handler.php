<?php
require_once('email_config.php');
require('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 3;                               // Enable verbose debug output
//$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'portfolioemailacc@gmail.com';//your email sending account
$mail->FromName = $_POST['name'];//your email sending account name
$mail->addAddress('xuesongc@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo($_POST['email']);
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = "Message from localhost";
$mail->Body    = $_POST['body'];
//$mail->AltBody = $_POST[''];
if(!$mail->send()) {
    print_r('Message could not be sent.');
    print_r('Mailer Error: ' . $mail->ErrorInfo);
} else {
    print_r ('Message has been sent');
}
print_r(error_get_last());
?>
