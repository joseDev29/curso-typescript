/*!
 Comentario que no es removido
*/

let shingekyNoKyojin: {
  name: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
} = {
  name: "Eren",
  edad: 20,
  poderes: [
    "Endurecimiento",
    "Control de los titanes mediante el poder del fundador",
    "Ver los recuerdos de sus usuarios futuros",
  ],
  getNombre() {
    return this.name;
  },
};

shingekyNoKyojin = {
  name: "Annie",
  edad: 20,
  poderes: ["Adquirir poderes de otros titanes"],
  getNombre() {
    return this.name;
  },
};

//Interfaces
interface Titan {
  name: string;
  powers: string[];
  getName?: () => string;
}

const titan: Titan = {
  name: "Reiner",
  powers: ["Armadura", "El petardo este siempre se salva"],
  getName: function () {
    return this.name;
  },
};

const titantico: Titan = {
  name: "Reiner",
  powers: ["Armadura", "El petardo este siempre se salva"],
};

//Custom types
type Titan2 = {
  name: string;
};

const titancito: Titan2 = {
  name: "Megata no kyojin",
};

//Multuples tipos
const multiple: string | number | boolean = 2;

function vaina(): number | Titan | string {
  return 4;
}
