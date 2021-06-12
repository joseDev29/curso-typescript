function returnNumber(): number {
  return 1;
}

function returnString(): string {
  return "";
}

function returnCallback(cb: Function): Function {
  return cb();
}

//parametros opcionales
function saludar(nombre: string, apellido?: string): string {
  return `${nombre} ${apellido || ""}`;
}

saludar("Eren");

//parametros por defecto
function saludar2(nombre: string, apellido: string = ""): string {
  return `${nombre} ${apellido}`;
}
saludar2("Mikasa");

//parametros rest
function nombreCompleto(nombre: string, ...otrosParametros: string[]): string {
  return `${nombre} ${otrosParametros.join(" ")}`;
}

//tipo error

let miFuncion: (x: number, y: number) => number;

miFuncion = (num1: number, num2: number) => {
  return num1 + num2;
};

let miVoid: () => void;

miVoid = () => {};
