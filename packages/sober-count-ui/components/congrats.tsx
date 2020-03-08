import * as React from "react";

import differenceInHours from "date-fns/differenceInHours";
import differenceInDays from "date-fns/differenceInDays";
import differenceInMinutes from "date-fns/differenceInMinutes";

export interface ICongratsProps {
  unixTime: number;
  name: string;
}

export default function Congrats(props: ICongratsProps) {
  const now = new Date();
  const sinceDate = new Date(props.unixTime * 1000);

  let differenceInWords = "";

  const difference = now.getTime() / 1000 - sinceDate.getTime() / 1000;

  if (difference < 1000 * 60 * 60 * 2) {
    differenceInWords = `${differenceInMinutes(now, sinceDate)} Minutes`;
  } else if (difference < 60 * 60 * 24 * 2) {
    // 2 days
    differenceInWords = `${differenceInHours(now, sinceDate)} Hours`;
  } else {
    differenceInWords = `${differenceInDays(now, sinceDate)} Days`;
  }

  return (
    <>
      <h1 className="font-bold text-gray-800 text-5xl">Congrats!</h1>
      <h2 className="font-semibold  text-gray-800  text-2xl">
        Sober from {props.name} since {differenceInWords}
      </h2>
    </>
  );
}
