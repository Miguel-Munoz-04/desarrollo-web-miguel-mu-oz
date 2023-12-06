document.getElementById('encuestaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var edad = document.getElementById('edad').value;
  var sexo = document.getElementById('sexo').value;
  var educacion = document.getElementById('educacion').value;
  var ocupacion = document.getElementById('ocupacion').value;
  
  var url = 'resultado-munoz-hernandez.html?edad=' + encodeURIComponent(edad) +
            '&sexo=' + encodeURIComponent(sexo) +
            '&educacion=' + encodeURIComponent(educacion) +
            '&ocupacion=' + encodeURIComponent(ocupacion);
  
  window.location.href = url;
});
