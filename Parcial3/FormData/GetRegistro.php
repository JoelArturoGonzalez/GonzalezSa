<?php
$id = $_POST["idClin"];

$servidor = "localhost";
$basedatos = "base";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar al servidor");
$consulta = "select * from tabla where nombre= '$id'";


$registros = mysqli_query($con,$consulta) or die ("problemas si");
$result = mysqli_fetch_array($registros, MYSQLI_ASSOC);

echo json_encode($result);

?>