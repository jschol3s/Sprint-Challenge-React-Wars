// Write your Character component here
import React from "react";
import "./Character.css";

function Character({ info }) {
  return (
    <div className='Card'>
      <p>{info.name}</p>
    </div>
  );
}

export default Character;
