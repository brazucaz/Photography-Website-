<?php

  // Variables using POST Array to hold email content
  $name = $_POST['visitorName'];//Holds the users name
  $email = $_POST['visitorEmail'];//Holds the users email address
  $message = $_POST=['message'];//Holds the message that was written by the user
  /*
  Function that checks form validity
  */
  function isValidForm() {
    $name = $email = $message = "";//Setting variables to blank value

    /*
    Manipulates data when submitting form so that
    the form is protected from Cross-site scripting
    */
    function validData($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    /*
    If the server request method is POST, then put the form data
    through the validData function
    */
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = validData(global $name);
      $email = validData(global $email);
      $message = validData(global $message);
    }
  }
  /*
  Function that creates and sends email
  note, form must have valid inputs
  */
  function createAndSend() {
    //this variable is just aggregation of the data to create an email message
    $sentMail =
    "Hi there! You have recieved an email from " + global$name +
    "\n" + "EMAIL: " + global$email + "\n" +
    "MESSAGE: " + global$message;

    //Sending out the message
    mail("algchoo@gmail.com", "TestEmail", $sentMail);
  }
 ?>
