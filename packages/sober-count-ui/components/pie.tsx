import React from "react";
import { bigNumberToWord } from "../helpers";

const Pie = ({ name, value }) => {
  const radius = 25;
  const circumference = radius * 2 * Math.PI;

  if (!value) return null;

  const complete = Math.floor(value);

  let v: string;

  if (complete > 1000) {
    v = bigNumberToWord(complete);
  } else {
    v = complete.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (complete < 10) {
      v = value.toFixed(2).replace(".00", "");
    }
  }

  const percent = Math.round((value - complete) * 100 * 10) / 10;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="pie flex justify-end rounded py-2 text-gray-700 text-right">
      <div className="pie-number">
        <h2 className="font-semibold">{v}</h2>
        <h3 className="font-light">{name}</h3>
      </div>
      <div className="w-12 pie-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 100 100"
          className="fill-current"
        >
          <circle className="bg" r={radius} cx="50" cy="50" />
          <circle
            className="prog"
            r={radius}
            cx="50"
            cy="50"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
          />
        </svg>
      </div>

      <style jsx>{`
        .pie {
          width: calc(50% - 1rem);
          max-width: 130px;
          margin: 0.5rem;
          texta-align: right;
          position: relative;
        }

        .pie-circle {
          padding: 20px 0 20px 20px;
          width: 50px;
        }

        .pie-number {
        }

        svg {
          transform: rotate(-90deg);
          display: block;
          margin: 0;
          width: 30px;
          height: auto;
        }
        svg circle {
          fill: none;
          stroke-width: 50px;
        }
        svg circle.prog {
          will-change: auto;
          stroke: #1a202c;
        }
        svg circle.bg {
          stroke: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Pie;
