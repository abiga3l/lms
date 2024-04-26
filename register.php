$conn=mysqli_connect('localhost','username','password','database');
if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

$hashedPassword=password_hash($password,PASSWORD_DEFAULT);

$sql="INSERT INTO users(firstname,lastname,username,email,password)VALUES('$firstname','$lastname','$username','$email','$hashedPassword')";
if(mysqli_query($conn,$sql)){
    echo "Error: " .$sql . "<br>" .mysqli_error($conn);
}
mysqli_close($conn);