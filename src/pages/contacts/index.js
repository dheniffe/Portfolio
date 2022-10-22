import React, { useState } from "react";
import * as S from "./style";

import Layout from "../../components/layout";

import emailJs from "@emailjs/browser";
import { formatPhone } from "../../utils/formatPhone";

const Contacts = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const templateParms = {
    from_name: username,
    message: message,
    email: email,
    phoneNumber: phone,
  };

  function sendMessage(e) {
    e.preventDefault();
    emailJs
      .send(
        "service_j9ezfk7",
        "template_zax0zw6",
        templateParms,
        "NWRICP-Jn1Pai3X4l"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setUsername("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("eroou", error);
        }
      );
  }

  return (
    <Layout>
      <S.Container>
        <S.FormLegend>
          acha que podemos trabalhar juntos? então entre em contato. ficarei
          feliz em fazer parte do seu time!
        </S.FormLegend>
        <S.FormContact action="#" method="post" onSubmit={sendMessage}>
          <S.InputForm
            type="text"
            name="name"
            placeholder="seu nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <S.InputForm
            type="email"
            name="email"
            placeholder="seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <S.InputForm
            type="tel"
            value={phoneValue}
            name="phone"
            placeholder="(DDD) 9 9999-9999"
            required
            onChange={(e) => setPhoneValue(formatPhone(e.target.value))}
          />
          <S.TextAreaForm
            rows={5}
            placeholder="me mande uma mensagem :)"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <S.SendButton>enviar</S.SendButton>
        </S.FormContact>
      </S.Container>
    </Layout>
  );
};

export default Contacts;
