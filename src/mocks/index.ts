export enum EnumStatusTravel {
  finished = "F",
  inProgress = "I",
}

export const expenseCategory = [
  { name: "Abastecimento" },
  { name: "Manutenção" },
  { name: "Alimentação" },
  { name: "Hospedagem" },
];

export const expenses = [
  {
    number: 1,
    describe: "Diesel",
    quantity: 125.0,
    total: 100.0,
    category: expenseCategory[0].name,
  },
  {
    number: 2,
    describe: "Almoço",
    quantity: 1,
    total: 50.0,
    category: expenseCategory[2].name,
  },
  {
    number: 3,
    describe: "Jantar",
    quantity: 1,
    total: 50.0,
    category: expenseCategory[2].name,
  },
  {
    number: 4,
    describe: "Troca de pneu",
    quantity: 1,
    total: 150.0,
    category: expenseCategory[1].name,
  },
  {
    number: 5,
    describe: "Troca de pastilha de freio",
    quantity: 1,
    total: 120.0,
    category: expenseCategory[1].name,
  },
  {
    number: 6,
    describe: "Troca de oleo",
    quantity: 1,
    total: 250.0,
    category: expenseCategory[1].name,
  },
  {
    number: 6,
    describe: "Diária de hotel",
    quantity: 1,
    total: 100.0,
    category: expenseCategory[3].name,
  },
  {
    number: 7,
    describe: "Almoço",
    quantity: 1,
    total: 50.0,
    category: expenseCategory[0].name,
  },
];

export const travels = [
  {
    number: 7,
    origin: "Campo Grande - MS",
    destiny: "Dourados - MS",
    status: EnumStatusTravel.inProgress,
  },
  {
    number: 6,
    origin: "Campo Grande - MS",
    destiny: "Bonito - MS",
    status: EnumStatusTravel.finished,
  },
  {
    number: 5,
    origin: "Corumbá - MS",
    destiny: "Rio Verde - MS",
    status: EnumStatusTravel.finished,
  },
  {
    number: 4,
    origin: "Sidrolândia - MS",
    destiny: "Camapuã - MS",
    status: EnumStatusTravel.finished,
  },
  {
    number: 3,
    origin: "Campo Grande - MS",
    destiny: "Sidrolândia - MS",
    status: EnumStatusTravel.finished,
  },
  {
    number: 2,
    origin: "Sidrolândia - MS",
    destiny: "Dourados - MS",
    status: EnumStatusTravel.finished,
  },
  {
    number: 1,
    origin: "Jardim - MS",
    destiny: "Dourados - MS",
    status: EnumStatusTravel.finished,
  },
];
