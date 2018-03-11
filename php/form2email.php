<?php
if(isset($_POST['submit'])){
    $to = "sellersc@mail.gvsu.edu"; // this is your Email address
    $from = htmlentities($_POST['email'], ENT_QUOTES); // this is the sender's Email address
    $first_name = htmlentities($_POST['first_name'], ENT_QUOTES);
    $last_name = htmlentities($_POST['last_name'], ENT_QUOTES);
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . htmlentities($_POST['message'], ENT_QUOTES);
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . htmlentities($_POST['message'], ENT_QUOTES);

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    //this should redirect the page back to the services.html page...
    //echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    header('Location: services.html');
    }
 ?>
