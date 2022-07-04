export enum EnumStatusTravel {
  finished = 'F',
  inProgress = 'I'
}
export const travels= [{
  number: 1,
  origin: "Campo Grande - MS",
  destiny: "Dourados - MS",
  status: EnumStatusTravel.inProgress

},{
  number: 2,
  origin: "Campo Grande - MS",
  destiny: "Bonito - MS",
  status: EnumStatusTravel.finished

},{
  number: 3,
  origin: "Corumbá - MS",
  destiny: "Rio Verde - MS",
  status: EnumStatusTravel.finished

},
{
  number: 4,
  origin: "Sidrolândia - MS",
  destiny: "Camapuã - MS",
  status: EnumStatusTravel.finished

}
,
{
  number: 5,
  origin: "Campo Grande - MS",
  destiny: "Sidrolândia - MS",
  status: EnumStatusTravel.finished

}
,
{
  number: 6,
  origin: "Sidrolândia - MS",
  destiny: "Dourados - MS",
  status: EnumStatusTravel.finished

}
,
{
  number: 7,
  origin: "Jardim - MS",
  destiny: "Dourados - MS",
  status: EnumStatusTravel.finished

}
]