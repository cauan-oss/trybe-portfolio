import React from "react";

function Email({ state }) {
    
  return (
    <div>
       <h1 id='title'>TrybeMail</h1>
     <div id='botoes'>
      <br />
     <button type='button'>Marcar todas como lida</button>
     <button type='button'>Marcar todas como nao lida</button>
     </div>
     <div  id='emails'>

      <p> Ola tenho uma vaga que bate com o seu perfil</p>
      <p>Parabens voce avancou no processo da vaga de pessoa desenvolvedora</p>
    </div>
    </div>
  )
};

export default Email;