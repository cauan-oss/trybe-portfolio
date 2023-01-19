import React, { useState, useEffect } from "react";

function Cep() {
  const [api, setApi] = useState<Repository[]>([])

   useEffect(() => {
    fetch('https://api.github.com/users/diego3g.repos')
    .then(response => response.json())
    .then(data => {
       setApi(data) 
  }, []) });


  /* const handleChange = (event) => {
    setApi({
      [event.target.name]: event.target.value,
    });
  }; */

  return (
    <div>
      <h1>Api-Brasil</h1>
      <li>
        <p>{api}</p>
      </li>
    </div>
  );
}

export default Cep;
