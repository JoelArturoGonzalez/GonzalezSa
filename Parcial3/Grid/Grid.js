$(document).ready(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost/GonzalezSa/Parcial3/Grid/Consulta.php",
        "method": "GET",
        "headers": {
          "Accept": "*/*"
        }
      };
      
      $.ajax(settings).done(function (response) {
        
        console.log(response);
        let tabla = JSON.parse(response);
        console.log(tabla);

        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
     
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
     
            data: response,
     
            fields: [
                { name: "idClin", type: "text", width: 150, validate: "required" },
                { name: "idNombre", type: "text", width: 50 }
            ]
        });
      });
 
    
});