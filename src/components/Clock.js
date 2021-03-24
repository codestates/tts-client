import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "../componentsCss/Clock.css";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import { getNumberOfToday } from "../functions/getNumberOfToday";
import { addToRecord } from "../actions/recordAction";

function Clock() {
  const [tick, setTick] = useState(0);
  const [min, setMin] = useState(0);
  const [hh, setHh] = useState(0);
  const delay= 1000;
  const [tickControl, setTickControl] = useState(false);
  const week = getNumberOfWeek();
  const day = getNumberOfToday();
  const time = hh * 3600 + min * 60 + tick;
  const postData = { day, time, week, recordName: "Coding" };
  const dispatch = useDispatch();

  const handleClick = () => {
    if (tickControl) {
      dispatch(addToRecord(postData));
    }
    setTick(tick - tick);
    setMin(min - min);
    setHh(hh - hh);
    return;
  };

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
      className={tickControl ? `clockGo` : `clockStop`}
      onClick={() => {
        setTickControl(tickControl ? false : true);
        handleClick();
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

