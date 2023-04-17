<?php
header("Access-Control-Allow-Origin:*");

$server_name='localhost';
$username='root';
$password='';
$dab='Loginform';

try{
    $con=new pdo("mysql:host=$server_name;dbname=$dab",$username,$password);
    $con->setAttribute(pdo::ATTR_ERRMODE,pdo::ERRMODE_EXCEPTION);
    $Fname=$_POST['Firstname'];
    $Lname=$_POST['Lastname'];
    $eml=$_POST['Email'];
    $pass=$_POST['Password'];
    $sql="insert into register values('$Fname','$Lname','$eml','$pass')";
    $con->exec($sql);
   echo "insertion success";

}


catch(exception $e) {
    echo "some thing went wrong";

    }
    $con=null;

?>
