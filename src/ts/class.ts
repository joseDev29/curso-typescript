class Person {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;

    return this;
  }
}

class Hunter extends Person {
  power: string;
  //Private solo puede ser accedida desde la propia clase
  private debility: string;
  //Protected solo puede ser accedida des la propia clase y
  //desde sus subclases
  protected rage: string;

  constructor(
    id: string,
    name: string,
    power: string,
    debility: string,
    rage: string
  ) {
    super(id, name);
    this.power = power;
    this.debility = debility;
    this.rage = rage;

    return this;
  }

  get getDebility() {
    return this.debility;
  }

  set setDebility(debility: string) {
    this.debility = debility;
  }

  protected get getRage() {
    return this.rage;
  }

  private set setRage(rage: string) {
    this.rage = rage;
  }
}

const hunter = new Hunter(
  "1234343",
  "Killua",
  "Transmutador",
  "Illumi",
  "Narukami"
);

class SuperHunter extends Hunter {
  superRage: string;

  constructor(
    id: string,
    name: string,
    power: string,
    debility: string,
    rage: string,
    superRage: string
  ) {
    super(id, name, power, debility, rage);
    this.superRage = superRage;
  }
}

//Otra forma de definir el constructor de una clase

class Avenger {
  constructor(public name: string, private realName: string) {}
}

//Propiedades y metodos static

class Personita {
  static id: string = "generic id";

  static hola() {
    console.log("Hola");
  }
}

const id = Personita.id;

Personita.hola();

//Clases abstractas
//Una clase abstracta no permite crear instancias

abstract class Mutante {
  name: string = "algo";

  static getName() {
    return this.name;
  }
}

//constructor privado
class Pilar {
  static instancia: Pilar;

  private constructor(public name: string) {}

  static getInstancia() {
    if (!this.instancia) {
      this.instancia = new Pilar("Tanjiro");
    }

    return this.instancia;
  }
}

const pilar = Pilar.getInstancia();
