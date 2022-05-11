export default class Notificador {
  opciones: string[];
  #creadorOpciones: CreadorOpciones = new CreadorOpciones();

  constructor() {}

  enviar(mensaje: string) {
    this.#creadorOpciones.enviarMensaje(mensaje);
  }

  listarOpciones(): string[] {
    return this.#creadorOpciones.opciones;
  }

  addDestinatarios(listaDestinatarios: string[]) {
    this.#creadorOpciones.actualizarDestinatarios(listaDestinatarios);
  }

  addOpciones(opciones: string[]) {
    this.#creadorOpciones.actualizarOpciones(opciones);
  }
}

class CreadorOpciones {
  #listaOpciones: any = {
    sms: new OpcionSMS(),
    email: new OpcionEmail(),
    facebook: new OpcionFacebook(),
  };

  #opciones: Opcion[];

  constructor() {}

  public get opciones(): string[] {
    return Object.keys(this.#listaOpciones);
  }

  // cambiar nombre
  actualizarOpciones(opciones: string[]) {
    this.#opciones = opciones.map((opcion) => this.#listaOpciones[opcion]);
  }

  // revisar params
  actualizarDestinatarios(destinatarios: string[]) {
    this.#opciones.map((opcion) => opcion.addDestinatario(destinatarios));
  }

  //revisar metodo
  enviarMensaje(mensaje: string) {
    this.#opciones.map((opcion) => opcion.enviar(mensaje));
  }
}

interface Opcion {
  destinatarios: string[];
  enviar(mensaje: string): void;
  addDestinatario(destinatarios: string[]): void;
}

class OpcionSMS implements Opcion {
  destinatarios: string[];

  constructor() {}

  enviar(mensaje: string): void {
    console.log(`mensaje enviado pos sms: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }

  addDestinatario(destinatarios: string[]): void {
    this.destinatarios = destinatarios;
  }
}

class OpcionEmail implements Opcion {
  destinatarios: string[];

  constructor() {}

  enviar(mensaje: string): void {
    console.log(`mensaje enviado por email: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }

  addDestinatario(destinatarios: string[]): void {
    this.destinatarios = destinatarios;
  }
}

class OpcionFacebook implements Opcion {
  destinatarios: string[];

  constructor() {}

  enviar(mensaje: string): void {
    console.log(`mensaje enviado a facebook: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }

  addDestinatario(destinatarios: string[]): void {
    this.destinatarios = destinatarios;
  }
}
