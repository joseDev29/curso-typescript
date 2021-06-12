function returnArg<T>(arg: T) {
  return arg;
}

const rnumber = returnArg(23);
const rstring = returnArg("algo");
const rboolean = returnArg(true);
const rarray = returnArg([]);
const robject = returnArg<object>({ algo: "algo" });

//arreglos genericos
let heroes: Array<string> = ["batman", "superman", "flash"];

//Clases genericas
class Cuadrado<T> {
  constructor(public base: T, public altura: T) {}

  area(): number {
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado<string | number>(23, "22");
