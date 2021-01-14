<?php
// header("Access-Control-Allow-Origin: http://127.0.0.1:3000");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type");
// header('Content-Type: application/json');

// Reference to study Docker
// https://www.youtube.com/watch?v=j9vfSaCIyPI&list=PLXzx948cNtr8N5zLNJNVYrvIG6hk0Kxl-

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();

$email = '';
$first_name = '';

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (empty($_POST['email'])) {
        $errors[] = 'The email is empty';
    } else {
        $email = $_POST['email'];
    }
    
    if (empty($_POST['first_name'])) {
        $errors[] = 'The first name is empty';
    } else {
        $first_name = $_POST['first_name'];
    }
}

if (empty($errors)) {
    http_response_code(200);

    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
      <title>$email is contacting you</title>
    </head>
    <body>
      <div>
        Date: <span style=\"color:#888\">$date</span>
        <br>
        Email: <span style=\"color:#888\">$email</span>
        <br>
        first_name: <div style=\"color:#888\">$first_name</div>
      </div>
    </body>
    </html>
    ";

    $headers = 	'From: Contact Form <contact@mydomain.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = $email; //'contact@example.com';
    $subject = 'Contacting you';

    // References to configure SwiftMailer
    // https://blog.mailtrap.io/swiftmailer-sendmail/
    // https://blog.mailtrap.io/send-emails-in-symfony/
    // https://blog.mailtrap.io/php-email-sending/
    // https://blog.mailtrap.io/test-emails-in-php/
    
    if (mail($to, $subject, $emailBody, $headers)) {
        $sent = true;
    }

} else {
    echo json_encode(
        [
            "sent" => false,
            "message" => "Something went wrong"
        ]);
}
?>

<?php if (!empty($errors)) : ?>
    {
        "status": "fail",
        "error":  <?php echo json_encode($errors) ?>
    }
<?php endif; ?>

<?php if (isset($sent) && $sent === true) : ?>
    {
        "status": "success",
        "first_name": "Your data was successfully submitted"
    }
<?php endif; ?>

<?php
    $email_subject = "Submission was successful";
    $email_message = "Form details\n\n";
    $email_message .= "Name: ".$first_name."\n\n";
    $email_message .= "Email: ".$email."\n\n";

    // create email headers
    $headers = 'From: '.$to."\r\n".
    'Reply-To: '.$to."\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/plain; charset=iso-8859-1\r\n";

    mail($email, $email_subject, $email_message, $headers);