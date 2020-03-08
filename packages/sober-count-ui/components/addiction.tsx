import React from "react";

import Pie from "./pie";

import {
  secondsSince,
  minutesSince,
  hoursSince,
  daysSince,
  weeksSince,
  monthsSince,
  yearsSince
} from "../helpers";
import Inset from "./Inset";

interface IAddictionProps {
  since: Date;
}

const Addiction: React.FC<IAddictionProps> = ({ since }) => {
  const requestRef: { current: number } = React.useRef();

  const sinceDate = new Date(since);

  const [data, setData] = React.useState({
    years: null,
    months: null,
    weeks: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    savings: null,
    cents: null,
    dailyCost: 630, // cents
    time: sinceDate.getTime()
  });

  function update() {
    setData({
      ...data,
      years: yearsSince(sinceDate),
      months: monthsSince(sinceDate),
      weeks: weeksSince(sinceDate),
      days: daysSince(sinceDate),
      hours: hoursSince(sinceDate),
      minutes: minutesSince(sinceDate),
      time: sinceDate.getTime(),
      seconds: secondsSince(sinceDate),
      cents: daysSince(sinceDate) * data.dailyCost
    });
  }

  const animate: () => void = () => {
    update();
    // The 'state' will always be the initial value here
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [since]); // Make sure the effect runs only once

  return (
    <Inset className="my-4 p-4 ">
      <div className="flex flex-wrap space-between">
        {data["seconds"] < 9999999 && (
          <Pie value={data["seconds"]} name="seconds" />
        )}
        <Pie value={data["minutes"]} name="minutes" />
        <Pie value={data["hours"]} name="hours" />
        <Pie value={data["days"]} name="days" />
        <Pie value={data["weeks"]} name="weeks" />
        <Pie value={data["months"]} name="months" />
        <Pie value={data["years"]} name="years" />
      </div>
    </Inset>
  );
};

export default Addiction;
