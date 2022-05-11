import Notificador from "./notification-library";

//Una vez la aplicación va a mandar una alerta al notificador de que debe en este caso añadir las opciones definidas
//el notificador lista las opciones disponibles y sino las hay las añade, después el noitificador envia el mensaje

class Aplicacion {
  notificador: Notificador = new Notificador();
  constructor() {}

  execute() {
    console.log(
      "opciones de envio de mensaje: " + this.notificador.listarOpciones()
    );

    this.notificador.añadirOpciones([
      {
        opcion: "sms",
        destinatarios: ["+56912345678", "+56987654321"],
      },
      {
        opcion: "facebook",
        destinatarios: ["estiven"],
      },
    ]);
    this.notificador.enviar("holi bro");
  }
}

const aplication: Aplicacion = new Aplicacion();

aplication.execute();
