window.onload = function() {
    document.getElementById("btnajax").addEventListener("click", pedirHeader)
    document.getElementById("btnreset").addEventListener("click", iniciarHeader)

}
    function pedirHeader() {
    var solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function() {
        if (solicitud.readyState == 4) {
            document.getElementById("MyDiv").innerHTML = solicitud.responseText;
        }
    };
    
    solicitud.open("GET","CargarArchivo.txt",true);
    solicitud.send();
    
}

function iniciarHeader() {
    document.getElementById("MyDiv").innerText = "Regreso";
}



    
