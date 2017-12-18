<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$house = $_POST['type_house'];
$space = $_POST['space'];
$height = $_POST['height'];
$question = $_POST['question'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'boilersrf@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'F4kd84dj3'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('boilersrf@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('a12341234.12341234@yandex.ru');     // Кому будет уходить письмо 
$mail->addAddress('pechkinb@inbox.ru');
$mail->addAddress('saleproject42@gmail.com');
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с нашего сайта';
$mail->Body    = ' Имя: ' .$name . '<br>Телефон: ' .$phone. '<br>Почта: ' .$email. '<br>Дом: ' .$house . 
'<br>Площадь: ' .$space. '<br>Высота: ' .$height. '<br>Вопрос: ' .$question. '<br> ';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>