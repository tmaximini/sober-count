import React, { ReactElement } from "react";
import { formatDate, daysSince } from "../helpers";

interface Props {
  date: Date;
}

export default function SoberSince({ date }: Props): ReactElement {
  return (
    <div>
      <h2>
        <span className="font-bold" style={{ fontSize: "6rem" }}>
          {daysSince(new Date(date)).toFixed(0)}
        </span>
        <span className="ml-2">days</span>
      </h2>
    </div>
  );
}
