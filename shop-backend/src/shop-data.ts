type Shop = {
  id: string;
  name: string;
  street: string;
  postalcode: string;
  city: string;
  country: string;
  openinghours: string;
  beers: string[];
};
const shops: Shop[] = [
  {
    id: "S1",
    name: "Eu Corp.",
    street: "Rue Falise 98",
    postalcode: "9233",
    city: "Wieze",
    country: "Belgium",
    openinghours: "08:30-19:00",
    beers: ["B2", "B3", "B4", "B7"],
  },
  {
    id: "S2",
    name: "FaucibusLLP",
    street: "Rue de Fichermont 62",
    postalcode: "7491",
    city: "Aartrijke",
    country: "Belgium",
    openinghours: "09:00-21:00",
    beers: ["B1", "B5", "B6", "B7"],
  },
  {
    id: "S3",
    name: "Blandit Nam LLP",
    street: "Brantingsgatan 4",
    postalcode: "31324",
    city: "Mora",
    country: "Sweden",
    openinghours: "07:00-19:30",
    beers: ["B2", "B3", "B4"],
  },
  {
    id: "S4",
    name: "Varius Ultrices Company",
    street: "Sempervägen 14",
    postalcode: "29000",
    city: "Tranås",
    country: "Sweden",
    openinghours: "08:30-20:45",
    beers: ["B1", "B3", "B7"],
  },
  {
    id: "S5",
    name: "Risus ",
    street: "Metus Straße 8575",
    postalcode: "52807",
    city: "Bremen",
    country: "Germany",
    openinghours: "10:00-20:00",
    beers: ["B1", "B4", "B5", "B6"],
  },
  {
    id: "S6",
    name: "Quisque Inc.",
    street: "Duisgatan 75",
    postalcode: "32001",
    city: "Lidköping",
    country: "Sweden",
    openinghours: "09:30-19:30",
    beers: ["B2", "B3", "B4", "B7"],
  },
  {
    id: "S7",
    name: "In Lorem Donec LLC",
    street: "Chemin Royal 22",
    postalcode: "5158",
    city: "PiŽtrebais",
    country: "Belgium",
    openinghours: "07:30-18:00",
    beers: ["B2", "B4", "B6"],
  },
  {
    id: "S8",
    name: "Eu Odio Tristique Company",
    street: "Hauptstraße 43",
    postalcode: "82901",
    city: "Stralsund",
    country: "Germany",
    openinghours: "08:00-17:30",
    beers: ["B2,B3,B5"],
  },
  {
    id: "S9",
    name: "Lorem Auctor Quis LLC",
    street: "Cuevas 408",
    postalcode: "209777",
    city: "Ercilla",
    country: "Chile",
    openinghours: "09:30-20:00",
    beers: ["B2", "B3", "B5"],
  },
  {
    id: "S10",
    name: "Elit Limited",
    street: "Av. Egestas 203",
    postalcode: "218895",
    city: "Penco",
    country: "Chile",
    openinghours: "08:30-22:00",
    beers: ["B3", "B4", "B5", "B6"],
  },
  {
    id: "S11",
    name: "Pede LLC",
    street: "Av. Libero 782",
    postalcode: "338708",
    city: "Quellón",
    country: "Chile",
    openinghours: "09:00-21:00",
    beers: ["B4", "B5", "B6"],
  },
];

export default shops;
