import React from "react";
import { useState } from "react";

const CLicksCounter = function () {
  const [clicksCount, setClicksCount] = useState(0);

  function increment() {
    setClicksCount(clicksCount + 1);
  }

  function decrement() {
    setClicksCount(clicksCount - 1);
  }

  return (
    <div>
      <div>{clicksCount}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CLicksCounter;
