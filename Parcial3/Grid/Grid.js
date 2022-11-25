$(document).ready(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "./http://localhost/GonzalezSa/Parcial3/Grid/GetRegistro.php",
        "method": "GET",
        "headers": {
          "Accept": "*/*"
        }
      };
      
      $.ajax(settings).done(function (response) {
        let tabla= JSON.parse(response);
        console.log(tabla)
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
            
     
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
     
            data: tabla,
     
            fields: [
                { name: "idClin", type: "number", textField: "ID", width: 150, validate: "required" },
                { name: "idNombre", type: "text", textField: "Nombre", width: 50 },
            ]
        });
      });
})

