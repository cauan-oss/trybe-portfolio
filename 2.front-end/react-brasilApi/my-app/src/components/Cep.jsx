import React, { useState, useEffect, useContext } from "react";
import brasilContext from "../context/brasilContext";

function Cep() {
const baralho = useContext(brasilContext);

  return (
    <div>
      <h1>Api-Brasil</h1>
      {baralho.map(() => (
        <baralho className="deck"></baralho>
      ))}
       </div>
  );
}

export default Cep;
