<?php

$nombre = $_POST['nombre'];
$años = $_POST['años'];
$nacionalidad = $_POST['nacionalidad'];

require('./FPDF/fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'Nombre ' .$nombre);
$pdf->Cell(40,10,'Edad ' .$años);
$pdf->Cell(40,10,'Nacionalidad ' .$nacionalidad);
$pdf->Output();
?>