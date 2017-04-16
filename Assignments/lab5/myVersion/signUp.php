<?php
$name = $_POST["name"];
$email = $_POST["email"];
$userName = $_POST["user"];
$pass = $_POST["pass"];
$cpass = $_POST["cpass"];

passwordCheck($pass, $cpass);

//Check if the passwords are matching
function passwordCheck($first, $second){
  if($first == $second){
  storeInfo($GLOBALS['name'], $GLOBALS['email'], $GLOBALS['userName'], $GLOBALS['pass'], $GLOBALS['cpass']);
  }else{
    echo "Your Passwords don't match. Please go back and enter them correctly...";
  }
}

//Store the inputed information to JSON objects, then into users.txt
function storeInfo($name, $email, $userName, $pass, $cpass){
  $userInfo = new stdClass();
  $userInfo->Name = "$name";
  $userInfo->Email = "$email";
  $userInfo->User_Name = "$userName";
  $userInfo->Password = "$pass";
  $userInfo->Confirm_Password = "$cpass";

  $userJSON =  json_encode($userInfo);//Store info in JSON format.

//Saving data to a text file.
 $myfile = fopen("users.txt", "a");
 fwrite($myfile, $userJSON);
 fwrite($myfile, "\n");
 fwrite($myfile, "\n");
 fclose($myfile);

//Going back to the login page.
header("Location:index.html");
}
?>
