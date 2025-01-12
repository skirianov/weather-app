import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Assets from "../../Assets.json";
import { fetchData } from "../../redux/WeatherSlice";

const colors = Assets.colors;
let defaultColor = colors.default;
// return the color that matches the weather description
const returnVal = (obj: any, val: any) => {
  let y = obj[val];
  return y;
};
let t: string = "#C0B3BC";

export const Header = () => {
  const desc = useAppSelector((state) =>
    state.weather.data.weather.map((desc) => desc.main)
  );
  const temp = useAppSelector((state) => state.weather.data.main.temp);
  const { loading, error, data, input } = useAppSelector(
    (state) => state.weather
  );
  const { cod, name } = useAppSelector((state) => state.weather.data);

  if (loading && !temp) {
    t = "#C0B3BC";
  } else if (desc[0] !== "default") {
    t = returnVal(Assets.colors, desc);
  }
  const refresh = () => {
    window.location.reload();
  };
  return (
    <header
      onClick={refresh}
      style={{ backgroundColor: `${t}` }}
      className="HEADER cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-opacity-10 "
    >
      <p
        className="text-lg uppercase font-bold 
        tracking-widest text-neutral-50"
      >
        rainorshine
      </p>
      <p className="text-neutral-50">click to refresh</p>
    </header>
  );
};

export const Footer = () => {
  const desc = useAppSelector((state) =>
    state.weather.data.weather.map((desc) => desc.main)
  );
  const temp = useAppSelector((state) => state.weather.data.main.temp);
  const { loading, error, data, input } = useAppSelector(
    (state) => state.weather
  );
  const { cod, name } = useAppSelector((state) => state.weather.data);

  if (loading && !temp) {
    t = "#C0B3BC";
  } else if (desc[0] !== "default") {
    t = returnVal(Assets.colors, desc);
  }
  return (
    <footer style={{ backgroundColor: `${t}` }} className="FOOTER pb-[1em] ">
      <p
        className=" text-md uppercase 
      text-left font-bold py-4 tracking-widest px-6
       text-neutral-50"
      >
        rainorshine
      </p>
    </footer>
  );
};
