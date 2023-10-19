"use client";
import { WheelDataType } from "react-custom-roulette";
import Roulette from "../components/Roulette";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

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
  const [isResult, setIsResult] = useState<boolean>(false);
  const onResult = (result: WheelDataType): void => {
    setIsResult(true);
    console.log(result);
  };

  const { width, height } = useWindowSize();

  console.log(width, height);

  return (
    <>
      <Roulette data={data} onResult={onResult} />
      {isResult ? <Confetti width={width} height={height} /> : null}
    </>
  );
}
