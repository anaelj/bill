export enum EnumStatusTravel {
  finished = "F",
  inProgress = "I",
}
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
