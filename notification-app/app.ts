import Notificador from "./notification-library";

class Aplicacion {
  notificador: Notificador = new Notificador();
  constructor() {}

  execute() {
    console.log(
      "opciones de envio de mensaje: " + this.notificador.listarOpciones()
    );

    this.notificador.addOpciones(["sms", "email"]);
    this.notificador.addDestinatarios(["ebedoya", "valete", "estive"]);
    this.notificador.enviar("holi bro");
  }
}

const aplication: Aplicacion = new Aplicacion();

aplication.execute();
