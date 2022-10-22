import React from "react";
import * as S from "./style";

import Layout from "../../components/layout";

import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiGithub } from "react-icons/di";
import { FaGitSquare, FaGithub } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";

const SkillIcons = [
  {
    id: 1,
    img: <AiFillHtml5 />,
    technology: "HTML 5",
  },
  {
    id: 2,
    img: <DiCss3 />,
    technology: "CSS 3",
  },
  {
    id: 3,
    img: <FaGitSquare />,
    technology: "GIT",
  },
  {
    id: 4,
    img: <FaGithub />,
    technology: "GitHub",
  },
  {
    id: 5,
    img: <DiJavascript />,
    technology: "JavaScript",
  },
  {
    id: 6,
    img: <SiReact />,
    technology: "React Js",
  },
];

const SocialMediaIcons = [
  {
    id: 1,
    img: <DiGithub />,
    name: "GitHub",
    size: "2.6rem",
    link: "https://github.com/dheniffe",
  },
  {
    id: 2,
    img: <TiSocialLinkedin />,
    name: "LinkdedIn",
    size: "2.6rem",
    link: "https://www.linkedin.com/in/dheniffe/",
  },
  {
    id: 3,
    img: <HiOutlineMailOpen />,
    name: "Gmail",
    size: "2.3rem",
    link: "mailto:dheniffe.oliveira@gmail.com",
  },
];

const Home = () => {
  return (
    <>
      <Layout>
        <S.Container>
          <S.ContentLeft>
            <S.Title>oi oi, eu sou a dheniffe :D</S.Title>
            <S.Subtitle>
              &lt;&gt;desenvolvedora front-end jr&lt;/&gt;
            </S.Subtitle>
            <S.Description>
              fico feliz ter despertado seu interesse em saber um poquinho mais
              sobre o meu trabalho. espero que possamos firmar uma parceria logo
              menos!
            </S.Description>
            <S.BoxSkillIcons>
              {SkillIcons.map((item) => (
                <S.SkillIcon key={item.id}>
                  <IconContext.Provider
                    value={{ size: "3rem", title: `${item.technology}` }}
                  >
                    {item.img}
                  </IconContext.Provider>
                  <S.HoverTextOnIcon>{item.technology}</S.HoverTextOnIcon>
                </S.SkillIcon>
              ))}
            </S.BoxSkillIcons>
          </S.ContentLeft>
          <S.ContentRight>
            <S.BackgroundCircle />
            <S.BoxSocialMediaIcons>
              {SocialMediaIcons.map((item) => (
                <S.SocialMediaIcon key={item.id}>
                  <S.SocialMediaLink href={item.link} target="_blank">
                    <IconContext.Provider
                      value={{ size: `${item.size}`, title: `${item.name}` }}
                    >
                      {item.img}
                    </IconContext.Provider>
                  </S.SocialMediaLink>
                  <p>{item.technology}</p>
                </S.SocialMediaIcon>
              ))}
            </S.BoxSocialMediaIcons>
          </S.ContentRight>
        </S.Container>
      </Layout>
    </>
  );
};

export default Home;
