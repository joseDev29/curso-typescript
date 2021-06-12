//Decoredores de clase

function consolita(constructor: Function) {
  console.log(constructor);
}

//Los decoradores de clase siempre envian
//el constructor de la clase a la funcion
//decorador
@consolita
class Villanos {
  constructor(public nombre: string) {}
}

//Decoradores de fabrica

//Se debe retornar algo que pueda ser usado como decorador
function imprimirConsola(imprimir: boolean): Function {
  if (imprimir) {
    return consolita;
  }

  //funcion nula
  return () => {};
}

@imprimirConsola(true)
class someClass {
  constructor(public coista: string) {
    return this;
  }
}

//Ejemplo

function planDelGuerrerito(constructor: Function) {
  constructor.prototype.imprimirPlan = function () {
    console.log("El plan de" + this.nombre + "es cascar a Pepe");
  };
}

function imprimible(constructor: Function) {
  constructor.prototype.imprimible = function () {
    console.log(this);
  };
}

@imprimible
@planDelGuerrerito
class Guerrerito {
  constructor(public name: string) {}
}

let pedrito = new Guerrerito("Pedrito Coral");

//castear a pedrito a any para evitar error
(<any>pedrito).imprimirPlan();
(<any>pedrito).imprimible();

//Decoradores de metodos

//Deben regresar un funcion
//Y reciben el target:any ,
//nombrePropiedad:string ,
// descriptor:PropertyDescriptor

function editable(esEditable: boolean) {
  return function (
    target: any,
    nombrePropiedad: string,
    descriptor: PropertyDescriptor
  ) {
    if (!esEditable) {
      console.log("No se puede editar este metodo");
    }
    //si true se puede sobreescribir
    //si es false no
    descriptor.writable = esEditable;
  };
}

class Guerrerote {
  constructor(public name: string) {}

  //Este metodo es editable
  @editable(true)
  plan() {
    console.log("Volear pata");
  }
}

//Decoradores de propiedades
//Los decoradores de propiedades no reciben un descriptor
function editablecito(esEditable: boolean) {
  return function (target: any, nombrePropiedad: string): any {
    let descriptor: PropertyDescriptor = {
      writable: esEditable,
    };

    return descriptor;
  };
}

class Cazador {
  //Propiedad no editable
  @editablecito(false)
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  rage() {
    console.log("Contrato de Nen");
  }
}

//Decoradores de parametros

function paramDecorator(target: any, metodo: string, index: number) {
  console.log(target, metodo, index);
}

function imprimirPoder(poder: string, mensaje: string) {
  console.log(poder);
}
