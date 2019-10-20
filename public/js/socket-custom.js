var socket = io();
// Escuchar
socket.on("connect", function() {
  console.log("Conectado en el servidor");
});

socket.on("disconnect", function() {
  console.log("Perdimos conexión con el servidor");
});

// Enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Jordi",
    mensaje: "Hola Mundo"
  },
  function(resp) {
    console.log("Respuesta server", resp);
  }
);

// Escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
  console.log("Servidor:", mensaje);
});
