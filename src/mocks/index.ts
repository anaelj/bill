export enum EnumStatusTravel {
  finished = "finished",
  inProgress = "inProgress",
}

export enum EnumCategoryTypes {
  car = "car",
  home = "home",
  maitence = "maitence",
  food = "food",
}

export const expenseCategory = [
  { name: "Abastecimento", type: EnumCategoryTypes.car },
  { name: "Manutenção", type: EnumCategoryTypes.car },
  { name: "Alimentação", type: EnumCategoryTypes.food },
  { name: "Hospedagem", type: EnumCategoryTypes.home },
];

export const expenses = [
  {
    number: 1,
    describe: "Diesel",
    quantity: 125.0,
    total: 100.0,
    date: "04/07/2022",
    category: expenseCategory[0],
  },
  {
    number: 2,
    describe: "Almoço",
    quantity: 1,
    total: 50.0,
    date: "04/07/2022",
    category: expenseCategory[2],
  },
  {
    number: 3,
    describe: "Jantar",
    quantity: 1,
    total: 50.0,
    date: "04/07/2022",
    category: expenseCategory[2],
  },
  {
    number: 4,
    describe: "Troca de pneu",
    quantity: 1,
    total: 150.0,
    date: "03/07/2022",
    category: expenseCategory[1],
  },
  {
    number: 5,
    describe: "Troca de pastilha de freio",
    quantity: 1,
    total: 120.0,
    date: "02/07/2022",
    category: expenseCategory[1],
  },
  {
    number: 6,
    describe: "Troca de oleo",
    quantity: 1,
    total: 250.0,
    date: "01/07/2022",
    category: expenseCategory[1],
  },
  {
    number: 6,
    describe: "Diária de hotel",
    quantity: 1,
    total: 100.0,
    date: "01/07/2022",
    category: expenseCategory[3],
  },
  {
    number: 7,
    describe: "Almoço",
    quantity: 1,
    total: 50.0,
    date: "01/07/2022",
    category: expenseCategory[0],
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
