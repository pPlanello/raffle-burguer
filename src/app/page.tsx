"use client";
import { WheelDataType } from "react-custom-roulette";
import Roulette from "../components/Roulette";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useState } from "react";
import { toastSuccess } from "@/components/Notification/toastNotifications";
import { Restaurant } from "@/components/Notification/toast.interface";

const data: Array<WheelDataType> = [
  { option: "BrioChef Madrid" },
  { option: "El Rancho de Santa Africa" },
  { option: "Burmet Madrid" },
  { option: "BDP Burguer" },
  { option: "La Birrabar" },
  { option: "Milwaukee Burguer" },
  { option: "Daluburguer" },
  { option: "El Torilurban" },
  { option: "Cesar Burguers" },
  { option: "Hundred Burguers" },
];

const restaurants: Array<Restaurant> = [
  {
    name: "BrioChef Madrid",
    description:
      "UNA PROPUESTA MUY TOP PARA LOS VERDADEROS BURGERLOVERS LAS MEJORES HAMBURGUESAS EN MADRID CON NUESTRA CARNE DRY AGED DE VACA RUBIA GALLEGA",
    url: "https://briochef.com/",
    image: "/images/briochef.png",
    score: 2,
  },
  {
    name: "Hundred Burguers",
    description:
      "No somos un restaurante. Somos el salón de una casa donde todo es natural y nada es perfecto. No hay dos mesas iguales. Reserva hueco y descubre nuestra mejor versión.",
    url: "https://www.hundredburgers.com/",
    image: "/images/hundred_burguers.jpg",
    score: 1,
  },
  {
    name: "El Rancho de Santa Africa",
    description:
      "Con más de 15 años de experiencia en el sector de la hostelería, nos decantamos por abrir un concepto gastronómico elaborado, con sello propio y centrado en la calidad del producto, de ahí que nuestra carne de vaca rubia gallega sea en exclusiva de Belua gourmet. Además todas nuestras carnes se hacen a la brasa (mezcla de carbón y leña) para darle ese toque característico que aprendimos de nuestros viajes a USA y en especial de los restaurantes más auténticos de Brooklyn.",
    url: "https://elranchodesantaafrica.es/",
    image: "/images/rancho_santa_africa.png",
    score: 3,
  },
  {
    name: "Burmet Madrid",
    description:
      "En Burmet estamos equipados con hornos de carbón, lo que nos brinda la oportunidad de concentrarnos en el sabor característico que la parrilla aporta a los alimentos de la más alta calidad cocinados a fuego lento, otorgando a cada plato un distintivo y ahumado sabor",
    url: "https://burmet.es/",
    image: "/images/burmetmadrid.jpg",
    score: 4,
  },
  {
    name: "BDP Burguer",
    description: "Hamburguesas de tipo smash, las mejores de Madrid.",
    url: "https://bdp-burger.com/",
    image: "/images/bdp_burguer.jpeg",
    score: 5,
  },
  {
    name: "La Birrabar",
    description:
      "Desde el 2001 una tradición familiar. Del barrio de boedo al mundo.",
    url: "https://labirrabar.com/",
    image: "/images/birrabar.jpg",
    score: 6,
  },
  {
    name: "Milwaukee Burguer",
    description: "Las mejores hamburguesas de malasaña y avenida de américa.",
    url: "https://www.milwaukee-burger.com/",
    image: "/images/milwaukee_burguer.jpg",
    score: 7,
  },
  {
    name: "Daluburguer",
    description:
      "Ponemos la magia y tú solo la disfrutas. Dalù es una hamburguesería con el compromiso de satisfacer las necesidades alimenticias desde un punto de vista familiar; es decir que además de disfrutar la mejor hamburguesa también podrás compartir en un ambiente donde todas las edades son bienvenidas. Un lugar mágico donde cada proceso y preparación tiene el mejor ingrediente: EL AMOR. Nos fascina presentarte algo nuevo. Hacer que aparezca en cada hamburguesa, el toque mágico de nuestros ingredientes. Seguramente has visto muchas escenas de hamburguesa, pero en Dalù no perderás ningun toque mágico.",
    url: "http://daluburguer.com",
    image: "/images/dalu_burguer.png",
    score: 8,
  },
  {
    name: "El Torilurban",
    description: "Hamburguesas Smash de la pera chicos.",
    url: "https://www.eltorilgourmet.com/",
    image: "/images/torilurban.png",
    score: 9,
  },
  {
    name: "Cesar Burguers",
    description:
      "César Peña (29 años) estudió hostelería, pero hace un par de años —justo antes del estallido de la pandemia— los Reyes Magos le trajeron una plancha eléctrica y ese regalo, inesperadamente, le ha cambiado la vida. Durante el confinamiento empezó a hacer burgers y en febrero de 2022 creo la mejor hamburguesa de España, llevándose a Galicia esa misma plancha, se ha impuesto en el II Campeonato de España de Hamburguesas.",
    url: "https://cesarsburgers.com/",
    image: "/images/cesar_burguers.png",
    score: 10,
  },
];

export default function Home() {
  const { width, height } = useWindowSize();
  const [isResult, setIsResult] = useState<boolean>(false);

  const onResult = (result: WheelDataType): void => {
    setIsResult(true);

    const restaurant = restaurants.filter(
      (restaurant) => restaurant.name === result.option
    )[0];

    toastSuccess(restaurant);
  };

  return (
    <>
      <Roulette data={data} onResult={onResult} />
      {isResult ? <Confetti width={width} height={height} /> : null}
    </>
  );
}
