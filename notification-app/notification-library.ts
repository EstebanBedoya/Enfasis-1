/**
 * @description
 * This is the notification library.
 * @author EstebanBedoya - Valter Zuliani - Estiven Cano
 */
export default class Notificador {
  opciones: string[] | undefined;
  private creadorOpciones: CreadorOpciones = new CreadorOpciones();

  constructor(notificador?: Notificador) {
    if (notificador) {
      this.opciones = notificador.opciones;
    }
  }

  // Método para enviar mensaje a cada una de las opciones en el creador de opciones.
  enviar(mensaje: string) {
    this.creadorOpciones.opciones?.forEach((opcion) => {
      opcion.enviar(mensaje);
    });
  }

  // Método para listar las opciones en el creador de opciones.
  listarOpciones(): string[] {
    return this.creadorOpciones.getOpciones;
  }
    
  // Método para añadir las opciones de la lista de destinatarios
  añadirOpciones(opcionDestinatario: OpcionDestinatario[]) {
    this.creadorOpciones.añadirOpciones(opcionDestinatario);
  }
}

interface OpcionDestinatario {
  opcion: string;
  destinatarios: string[];
}

// Clase para definir el tipo de opción mediante listas y añade opciones a estas dependiendo del tipo
class CreadorOpciones {
  private listaOpciones: any = {
    sms: (params: string[]) => new OpcionSMS(params),
    email: (params: string[]) => new OpcionEmail(params),
    facebook: (params: string[]) => new OpcionFacebook(params),
  };

  opciones: Opcion[] | undefined;

  constructor(creador?: CreadorOpciones) {
    if (creador) {
      this.opciones = creador.opciones;
    }
  }

  get getOpciones(): string[] {
    return Object.keys(this.listaOpciones);
  }
  
  // Método para añadir las opciones en base a la lista de destinatarios
  añadirOpciones(opcionDestinatario: OpcionDestinatario[]) {
    this.opciones = opcionDestinatario.map(({ opcion, destinatarios }) =>
      this.listaOpciones[opcion](destinatarios)
    );
  }
}

 // Interfaz opción que envia el mensaje según el tipo de opción y adicióna los destinatarios
interface Opcion {
  destinatarios: string[];
  enviar(mensaje: string): void;
}

 // Al crear un clase objeto tipo mensaje con el respectivo destinatario y envia el mensaje junto con el destinatario
class OpcionSMS implements Opcion {
  destinatarios: string[] = [];

  constructor(destinatarios: string[]) {
    this.destinatarios = destinatarios;
  }

  enviar(mensaje: string): void {
    console.log(`mensaje enviado pos sms: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }
}

 // Al crear un clase objeto tipo Email con el respectivo destinatario y envia el mensaje junto con el destinatario
class OpcionEmail implements Opcion {
  destinatarios: string[] = [];

  constructor(destinatarios: string[]) {
    this.destinatarios = destinatarios;
  }

  enviar(mensaje: string): void {
    console.log(`mensaje enviado por email: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }
}

 // Al crear un clase objeto tipo Facebook con el respectivo destinatario y envia el mensaje junto con el destinatario
class OpcionFacebook implements Opcion {
  destinatarios: string[] = [];

  constructor(destinatarios: string[]) {
    this.destinatarios = destinatarios;
  }

  enviar(mensaje: string): void {
    console.log(`mensaje enviado a facebook: ${mensaje}`);
    console.log(`destinatarios: ${this.destinatarios}`);
  }
}
