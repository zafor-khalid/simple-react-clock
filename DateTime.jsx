import { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString("en-US", { timeZone: "UTC" })
  );

  useEffect(() => {
    
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString("en-US", { timeZone: "UTC" }));
    }, 1000);
    return () => clearInterval(interval);
  }, [dateTime]);
  return (
    <>
      <h1 className="date-time">
        Current Date And Time is <br /> {dateTime}
      </h1>
    </>
  );
};

export default DateTime;
