import React, { useEffect } from "react";
import { useState } from "react";

function Email({ state }) {
  const [emails, setEmail] = useState([
    { id: 1, title: "Ola tenho uma vaga que bate com o seu perfil", status: 0 },
    {
      id: 2,
      title:
        " Parabens voce avancou no processo da vaga de pessoa desenvolvedora",
      status: 0,
    },
  ]);
  const click = (id) => {
    setEmail(
      emails.map((email) => {
        if (email.id === id) {
          email.status = 1;
        }
        return email;
      })
    );
  };

  const unreadEmail = (id) => {
    setEmail(
      emails.map((email) => {
        if (email.id === id) {
          email.status = 0;
        }
        return email;
      })
    );
  };
  const everythingEmails = () => {
    setEmail(
      emails.map((email) => {
        email.status = 1;
        return email;
      })
    );
  };
  const everythingUnreadEmails = () => {
    setEmail(
      emails.map((email) => {
        email.status = 0;
        return email;
      })
    );
  };

  /* useEffect(() => {}, []) Caso prescise um estado alterar outro estado o stato fica dentro do 
    array para ser monitorado */
  useEffect(() => {
    if (emails.every((email) => email.status === 1)) {
      alert("parabens voce leu todos os emails");
    }
  }, [emails]);
  return (
    <div>
      <header>
        <h1 id="title">TrybeMail</h1>
      </header>
      <div id="botoes">
        <button onClick={everythingEmails} type="button">
          {" "}
          todos lidos{" "}
        </button>
        <button onClick={everythingUnreadEmails} type="button">
          {" "}
          todos nao lidos{" "}
        </button>
        <br />
      </div>
      <div id="emails">
        {emails.map((email) => (
          <label key={email.id} htmlFor="">
            <p style={{ background: email.status ? "gray" : "inherit" }}>
              {email.title}
            </p>
            <button onClick={() => click(email.id)} type="button">
              {" "}
              marcar como lido
            </button>
            <button onClick={() => unreadEmail(email.id)}>
              marcar como nao lido
            </button>
          </label>
        ))}
      </div>
    </div>
  );
}

/* quando eu passo paramentros dentro da funcao onclick tem que ser em callback
marcar como lido*/
export default Email;
