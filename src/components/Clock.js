import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToRecord } from "../actions/recordAction";

function Clock() {
  const [tick, setTick] = useState(0);
  const [min, setMin] = useState(0);
  const [hh, setHh] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [tickControl, setTickControl] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recordReducer);
  // const itemState = useSelector((state) => state.recordReducer);

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
    <div>
      <div
        //todo: css 파일로 옮겨주세요
        style={{ cursor: "pointer" }}
        onClick={() => {
          console.log(state);
          dispatch(addToRecord(hh * 3600 + min * 60 + tick));
          setTickControl(tickControl ? false : true);
          setTick(tick - tick);
          setMin(min - min);
          setHh(hh - hh);
          // dispatch(addToRecord(hh * 3600 + min * 60 + tick));
          // eslint-disable-next-line react-hooks/rules-of-hooks
          // console.log(itemState);

          // console.log(state);
        }}>
        {hh < 10 ? `0${hh}` : hh}:{min < 10 ? `0${min}` : min}:{tick < 10 ? `0${tick}` : tick}
      </div>

      {/* <button
        onClick={() => {
          setTickControl(tickControl ? false : true);
        }}>
        가라,멈춰라
      </button> */}
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
