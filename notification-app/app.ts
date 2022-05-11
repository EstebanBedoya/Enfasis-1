import Notificador from "./notification-library";

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
        opcion: "email",
        destinatarios: ["estivencano99@gmail.com"],
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
