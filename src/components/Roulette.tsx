"use client";
import { useEffect, useState } from "react";
const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);
import { WheelDataType } from "react-custom-roulette";
import className from "./Roulette.module.css";
import Image from "next/image";
import { PointerProps } from "react-custom-roulette/dist/components/Wheel/types";
import dynamic from "next/dynamic";

interface Props {
  data: Array<WheelDataType>;
  onResult: (result: WheelDataType) => void;
}

const pointerStyle: React.CSSProperties = {
  background: "white",
};

const pointerProps: PointerProps = {
  style: pointerStyle,
};

export default function Roulette(props: Props): JSX.Element {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * props.data.length);

    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    props.onResult(props.data[prizeNumber]);
    setMustSpin(true);
  };

  return (
    <>
      <div className={className.roulette_container}>
        <Wheel
          key={"roulette"}
          mustStartSpinning={mustSpin}
          spinDuration={0.2}
          prizeNumber={prizeNumber}
          data={props.data}
          outerBorderColor={"#ccc"}
          outerBorderWidth={9}
          innerBorderColor={"#f2f2f2"}
          radiusLineColor={"tranparent"}
          pointerProps={pointerProps}
          radiusLineWidth={1}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={10}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]}
          onStopSpinning={handleSpinStop}
        />
        <Image
          key={1}
          src={"/images/burguer.png"}
          className={className.roulette_img}
          alt={"burguer"}
          width={500}
          height={500}
        />
        <button
          className={`${className.roulette_button} disabled:cursor-not-allowed disabled:opacity-75`}
          onClick={handleSpinClick}
          disabled={mustSpin}
        >
          Press Button
        </button>
      </div>
    </>
  );
}
