//Interfaz basica
interface Coche {
  nombre: string;
  placa: string;
  modelo: string;
  año: Date;
}

const coche: Coche = {
  nombre: "Mazda",
  placa: "HRF003",
  modelo: "Bio 6",
  año: new Date(2019, 3, 24),
};

//Atributos opcionales
interface Laptop {
  id: number;
  modelo: string;
  marca?: string;
}

const laptop: Laptop = {
  id: 13433,
  modelo: "ROG 23",
};

//Atributos funcion
interface Phone {
  id: number;
  modelo: string;
  precio: number;
  valorTotal(iva: number): number;
  //opcional
  descuento?(descuento: number): number;
}

const phone: Phone = {
  id: 242343,
  modelo: "Samsung Galaxy S20",
  precio: 960,
  valorTotal(iva): number {
    return this.precio + this.precio * iva;
  },
};

const phoneValorTotal = phone.valorTotal(0.19);

//Inteface de funcion
interface functionSuma {
  (num1: number, num2: number, cb: () => {}): (err: Error, data: string) => {};
}

let sumar: functionSuma;

sumar = (num1: number, num2: number, cb: () => {}) => {
  return cb;
};

//Implementar interfaz en un clase

class Cochecito implements Coche {
  constructor(
    public nombre: string,
    public placa: string,
    public modelo: string,
    public año: Date
  ) {}
}

//Extender interfaz
interface superCoche extends Coche {
  nitrogeno: number;
}
