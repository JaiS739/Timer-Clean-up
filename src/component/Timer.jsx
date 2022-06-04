import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [datas, setDatas] = useState([]);

  const [saveValue, setSaveValue] = useState({
    startvalue: "",
    endsvalue: "",
  });

  console.log("hi", typeof datas, datas);

  const [endDatas, setEndDatas] = useState([]);
  console.log("hi", typeof endDatas, endDatas);

  useEffect(() => {
    const id = setInterval(() => {
      if (datas >= endDatas) {
        clearInterval(id);
      } else {
        setDatas(datas + 1);
        // setTimer(timer + 1);
      }
      //   prev it is previous value of timer
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [datas]);

  let handleChange = (e) => {
    let { name, value } = e.target;

    setSaveValue({ ...saveValue, [name]: value });
  };

  const startRef = useRef();
  const endRef = useRef();

  let handleSubmit = () => {
    setDatas(Number(saveValue.startvalue));
    setEndDatas(Number(saveValue.endsvalue));
    startRef.current.value = "";
    endRef.current.value = "";
  };

  // ==================handleChang===============:

  return (
    <div>
      Timer:{datas}
      <div>
        <input
          type="number"
          placeholder="starting second"
          onChange={handleChange}
          name="startvalue"
          ref={startRef}
        />
        <input
          type="number"
          placeholder="ending second"
          onChange={handleChange}
          name="endsvalue"
          ref={endRef}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default Timer;
