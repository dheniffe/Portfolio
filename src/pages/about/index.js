import React, { useState } from "react";
import * as S from "./style";

import Layout from "../../components/layout";
import Sports from "../../assets/images/sportsAbout.png";

const AboutMeData = [
  {
    id: 0,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
  {
    id: 1,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
  {
    id: 2,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
  {
    id: 3,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
  {
    id: 4,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
  {
    id: 5,
    image: Sports,
    title: "espírito olímpico..",
    name: "Sports",
    description:
      "pratiquei todo tipo de esporte durante alguns anos da minha vida, dentre eles: natação, futebol, basquete, handball, vôlei, atletismo, taekwondo, badminton, xadrez, tchoukball e judô. machuquei pessoas, me machuquei e hoje tenho os joelhos mais podres do brasil.",
  },
];

const About = () => {
  const [itemSelected, setItemSelected] = useState(undefined);

  return (
    <Layout>
      <S.Container>
        {AboutMeData.map((item, index) => (
          <S.Card>
            <figure>
              <img
                src={item.image}
                alt={item.name}
                onClick={() =>
                  item.id === itemSelected
                    ? setItemSelected(undefined)
                    : setItemSelected(index)
                }
              />
            </figure>
            {item.id === itemSelected && (
              <S.Modal itemSelected={item.id === itemSelected}>
                <S.ModalTitle>{item.title}</S.ModalTitle>
                <S.ModalDescription>{item.description}</S.ModalDescription>
              </S.Modal>
            )}
          </S.Card>
        ))}
      </S.Container>
    </Layout>
  );
};

export default About;
