<?php
  $name = $_POST['visitorName'];//Holds the users name
  $email = $_POST['visitorEmail'];//Holds the users email address
  $message = $_POST=['message'];//Holds the message that was written by the user

    $name = " ";
    $email = " ";
    $message = " ";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = validData(global $name);
      $email = validData(global $email);
      $message = validData(global $message);
    }

    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;

    $sentMail =
    "Hi there! You have recieved an email from " + global$name +
    "\n" + "EMAIL: " + global$email + "\n" +
    "MESSAGE: " + global$message;

    //Sending out the message
    mail("algchoo@gmail.com", "TestEmail", $sentMail);
 ?>
