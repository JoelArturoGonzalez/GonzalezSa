<?php

$fechaHoy        = date('Y/m/d H:i:s');
$siguienteSemana = time() + (7 * 24 * 60 * 60);
$fehcaExpira     = date('Y/m/d H:i:s', $siguienteSemana);

echo '<b>fecha de creacion de cookie: </b>'.$fechaHoy;
echo '<b>fecha de vencimiento de cookie: </b>'.$fehcaExpira;

setcookie("ultimaVista",$fechaHoy,time() + (7 * 24 * 60 * 60));

?>