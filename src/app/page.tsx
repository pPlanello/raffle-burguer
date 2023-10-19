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
];

const restaurants: Array<Restaurant> = [
  { name: "BrioChef Madrid", description: "" },
  { name: "El Rancho de Santa Africa", description: "" },
  { name: "Burmet Madrid", description: "" },
  { name: "BDP Burguer", description: "" },
  { name: "La Birrabar", description: "" },
  { name: "Milwaukee Burguer", description: "" },
  { name: "Daluburguer", description: "" },
  { name: "El Torilurban", description: "" },
  { name: "Cesar Burguers", description: "" },
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
