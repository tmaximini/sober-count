import React, { ReactElement } from "react";

interface Props {
  claps: number;
}

export default function userClaps({ claps }: Props): ReactElement {
  return (
    <h2>
      <span className="font-bold" style={{ fontSize: "6rem" }}>
        {claps}
      </span>
      <span className="ml-2">Claps</span>
    </h2>
  );
}
