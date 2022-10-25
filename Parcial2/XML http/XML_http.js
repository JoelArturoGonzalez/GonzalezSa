window.onload = function() {
    document.getElementById("btnajax").addEventListener("click", pedirHeader)
    document.getElementById("btnreset").addEventListener("click", iniciarHeader)

}
    function pedirHeader() {
    console.log("Mensaje de entrada")
    var solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function() {
        if (solicitud.readyState == 4) {
            document.getElementById("MyDiv").innerHTML = solicitud.responseText;
        }
    };
    
    solicitud.open("GET","CargarArchivo.txt",true);
    solicitud.send();
    console.log("Mensaje de entrada 2")
}

function iniciarHeader() {
    document.getElementById("MyDiv").innerText = "Regreso";
}




    
