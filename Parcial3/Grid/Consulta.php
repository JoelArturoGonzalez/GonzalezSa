<?php
$servidor = "localhost";
$basedatos = "base";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar al servidor");
$consulta = "select * from tabla";
$registros = mysqli_query($con,$consulta) or die ("problemas si");

$result = mysqli_fetch_all($registros, MYSQLI_ASSOC);

mysqli_close($con);
echo json_encode($result);

?>