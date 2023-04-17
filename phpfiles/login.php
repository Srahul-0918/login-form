<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:access");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:Application/jsoncharset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorisaton,X-Requested-With");
$con=mysqli_connect("localhost","root","");
mysqli_select_db($con,'Loginform');
$data=json_decode(file_get_contents("php://input"));
$email=$data->email;
$password=$data->email;

$result=mysqli_query($con,"select *from register where email='".$email."' AND password='".$password."'");

$nums=mysqli_num_rows($result);
$rs=mysqli_fetch_array($result);

if($nums>=1)
{
    http_response_code(200);
    $outp.="";
    $outp.='{"email":"' .rs["email"].'",';
    $outp.='"Firstname":"' .rs["Firstname"].'",';
    $outp.='"Lastname":"' .rs["Lastname"].'",';
    $outp.='"Status":"200"}';
    echo $outp;
}
else {
    http_response_code("202");
}


?>
   
