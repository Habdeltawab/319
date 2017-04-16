<?php
$file = fopen("users.txt", "r");//Open users.txt file;
$searchForUsername = $_POST["userName"];//The entered username.
$searchForPassword = $_POST["password"];//The entered password.
$matchInFile = fread($file, filesize("users.txt"));//The text we are going to look in.
$usernameRegex = "/".$searchForUsername."/i";//Username we are going to look for.
$passwordRegex = "/".$searchForPassword."/";//What are we going to look for.

//Check if the user name is accepted (in the file).
$userInfo = new stdClass();

//Match the username and password.
 if(preg_match($usernameRegex, $matchInFile) && preg_match($passwordRegex, $matchInFile) && ($searchForPassword)){
    //On Success.
    $userInfo->Username = "$searchForUsername";

    //Save the last sign in.
    $myFile = fopen("lastSignIn.txt","w");
    fwrite($myFile,$searchForUsername);
    fclose($myFile);

    //Go to viewPosts
     header("Location:viewPosts.php");
    json_encode($userInfo);
 }else{
   // On faliure, go back to the login page.
   header("Location:login.php");
 }

?>
