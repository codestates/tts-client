import React, { useState, useEffect, useRef } from "react";
import "../componentsCss/Clock.css";

function Clock() {
  const [tick, setTick] = useState(0);
  const [min, setMin] = useState(0);
  const [hh, setHh] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [tickControl, setTickControl] = useState(false);

  useInterval(
    () => {
      setTick(tick + 1 === 60 ? tick - 59 : tick + 1);
      if (tick % 59 === 0 && tick !== 0) {
        setMin(min + 1 === 60 ? min - 59 : min + 1);
      }
      if (min % 59 === 0 && min !== 0) {
        setHh(hh + 1);
      }
    },
    tickControl ? delay : null
  );

  return (
    <div
      className={tickControl ? `clockHover clockGo` : `clockHover clockStop`}
      onClick={() => {
        setTickControl(tickControl ? false : true);
        setTick(tick - tick);
        setMin(min - min);
        setHh(hh - hh);
      }}>
      <div className="hhMm">
        {hh < 10 ? `0${hh}` : hh}:{min < 10 ? `0${min}` : min}
      </div>
      <div className="tick">:{tick < 10 ? `0${tick}` : tick}</div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Clock;

// new Date().toLocaleTimeString()
