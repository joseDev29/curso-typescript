//number
let n: number = 3.76;

//string
let hello: string = "Hello world";

//boolean
let bool: boolean = true;

//undefined
let undf: undefined = undefined;

//null
let nullito: null = null;

//array
const arr: number[] = [2, 3, 4];

//tupla
const arr2: [number, string, boolean] = [12, "", true];

//any
let c: any = 23;
c = "dfsdf";
c = false;
c = () => {};

//Enum
enum Colors {
  red = "Red",
  green = "Green",
  blue = "Blue",
}

let color = Colors.blue;

//Custom types, interfaces
interface Persona {
  id: number;
  name: string;
  lastname: string;
  age: number;
  saludar: Function;
}

const persona: Persona = {
  id: 12343243,
  name: "Pepe",
  lastname: "Problema",
  age: 12,
  saludar: () => {
    console.log(`Hola`);
  },
};

//void
function haceAlgo(): void {
  console.log("hice algo");
}

const algo = haceAlgo();

//never
function error(message: string): never {
  throw new Error(message);
}

let someValue: any = "some string";

//Castear variables
let cosita: number = (<string>someValue).length;

error("Se jodió esta vaina");
