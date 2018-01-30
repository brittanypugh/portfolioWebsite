<?php
//check for values before setting variables
if(isset( $_POST['firstName'])){
	$firstName = $_POST['firstName'];
}else{
	$errorMessage = "Field required ";
}

if(isset( $_POST['lastName'])){}
	$lastName = $_POST['lastName'];
}else{
	$errorMessage = "Field required ";
}

if(isset( $_POST['email'])){
  	$email = $_POST['email'];
}else{
	$errorMessage = "Field required ";
}

if(isset( $_POST['message'])){
	$message = $_POST['message'];
}else{
	$errorMessage = "Field required ";
}

if(isset( $_POST['subject'])){
	$subject = $_POST['subject'];
}else{
	$errorMessage = "Field required ";
}

// prepare email body text
$space = " ";
$content .= "Name: ";
$content .= $firstName . $space . $lastName;
$content .= "\n";
 
$content .= "Email: ";
$content .= $email;
$content .= "\n";
 
$content .= "Message: ";
$content .= $message;
$content .= "\n";

$recipient = "pughbritt00@gmail.com";
$mailheader = "From: $email \r\n";

//send email
$success = mail($recipient, $subject, $content, "From: ".$mailheader) or die("Error!");

// redirect to success page
if ($success && $errorMessage == ""){
	echo "success";
}else{
	if($errorMessage ==""){
		echo "something went wrong..."
	}else {
    	echo "invalid";
	}
}

?>