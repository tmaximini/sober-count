import React, { ReactElement, useEffect } from "react";

import confetti from "canvas-confetti";
import styled from "@emotion/styled";
import ClapButton from "react-clap-button";

const ClapButtonWrapper = styled.div`
  margin: 20px;
  svg {
    margin: 0 auto;
  }
`;

interface Props {
  setNrOfClaps: (nrOfClaps: number) => void;
  claps: number;
}

export default function userClaps({
  setNrOfClaps,
  claps
}: Props): ReactElement {
  let myConfetti: (options: {
    particleCount: number;
    startVelocity: number;
    spread: number;
    origin: { x: number; y: number };
  }) => void;

  useEffect(() => {
    myConfetti = confetti.create(document.getElementById("confetti"), {
      resize: true,
      useWorker: true
    });
  });

  const onCountChange = ({ count, countTotal }) => {
    myConfetti({
      particleCount: Math.random() * 120,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.42 + Math.random() / 6,
        // since they fall down, start a bit higher than random
        y: 0.5 - Math.random() / 10
      }
    });
    setNrOfClaps(count);
  };

  return (
    <ClapButtonWrapper>
      <ClapButton
        count={0}
        countTotal={claps}
        isClicked={false}
        onCountChange={onCountChange}
      />
    </ClapButtonWrapper>
  );
}
