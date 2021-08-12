import React, { useState, useEffect } from "react";
import "./voting.css";

const Voting = function Voting() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} points`;
  });

  return (
    <div>
      <span className="voting">{count} points</span>
      <button>
        <img
          className="plus-one"
          src={`${process.env.PUBLIC_URL}/plus1.png`}
          alt="plus-one"
          onClick={() => setCount(count + 1)}
        />
      </button>
      <button>
        <img
          className="plus-one"
          src={`${process.env.PUBLIC_URL}/minus2.png`}
          alt="minus-one"
          onClick={() => setCount(count - 1)}
        />
      </button>
      {/* <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button> */}
    </div>
  );
};

export default Voting;
