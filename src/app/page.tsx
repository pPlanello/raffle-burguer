"use client";
import { WheelDataType } from "react-custom-roulette";
import Roulette from "./components/Roulette";

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

export default function Home() {
  const onResult = (result: WheelDataType): void => {
    console.log(result);
  };
  return (
    <>
      <Roulette data={data} onResult={onResult} />
    </>
  );
}
