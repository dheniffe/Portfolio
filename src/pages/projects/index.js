import React, { useState } from "react";
import * as S from "./style";

import Layout from "../../components/layout";

import { VscLiveShare } from "react-icons/vsc";
import { DiGithubFull } from "react-icons/di";

import OdsProject from '../../assets/images/odsProject.png'

const ProjectsData = [
  {
    id: 1,
    image: OdsProject,
    technologies: "React Js",
    description:
      "Projeto desenvolvido como parte do desafio final do curso Vai na Web.",
    repoLink: "https://github.com/dheniffe/OdsRio",
    website: "#",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/de/db/e0/dedbe0c7a503fae73f061d6b0e21923f.jpg",
    name: "The Witcher",
    technologies: "HTML5 e CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis odio vitae luctus aliquet. Proin mattis arcu et tellus lobortis, ut hendrerit nulla tincidunt.",
    repoLink: "blabla",
    website: "blabla",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/de/db/e0/dedbe0c7a503fae73f061d6b0e21923f.jpg",
    name: "Finn",
    technologies: "HTML5 e CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis odio vitae luctus aliquet.",
    repoLink: "blabla",
    website: "blabla",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/de/db/e0/dedbe0c7a503fae73f061d6b0e21923f.jpg",
    name: "Harry Potter",
    technologies: "HTML5 e CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis odio vitae luctus aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis odio vitae luctus aliquet.",
    repoLink: "blabla",
    website: "blabla",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(1);
  const length = ProjectsData.length;

  const prevProject = () => {
    setCurrentProject(currentProject === 1 ? length - 1 : currentProject - 1);
  };

  const nextProject = () => {
    setCurrentProject(currentProject === length - 1 ? 1 : currentProject + 1);

    if (!Array.isArray(ProjectsData) || ProjectsData.length <= 1) {
      return null;
    }
  };

  return (
    <Layout>
      {ProjectsData.map((item) => (
        <S.Container isCurrent={item.id === currentProject} key={item.id}>
          <S.ContentLeft>
            <S.ProjectTitle>{item.name}</S.ProjectTitle>
            <S.ProjectSubtitle>{item.technologies}</S.ProjectSubtitle>
            <S.ProjectDescription>{item.description}</S.ProjectDescription>
            <S.BoxRedirectProject>
              <S.LinkProject href={item.website}>
                <VscLiveShare size={20}/>
              </S.LinkProject>
              <S.LinkProject href={item.repoLink}>
                <DiGithubFull size={50} />
              </S.LinkProject>
            </S.BoxRedirectProject>
            <S.ButtonBox>
              <S.ButtonOfNavigation onClick={prevProject}>
                projeto anterior
              </S.ButtonOfNavigation>
              <S.ButtonOfNavigationNext onClick={nextProject}>
                proximo projeto
              </S.ButtonOfNavigationNext>
            </S.ButtonBox>
          </S.ContentLeft>
          <S.ContentRight>
            <S.ProjectImage src={item.image} alt={item.name} />
          </S.ContentRight>
        </S.Container>
      ))}
    </Layout>
  );
};

export default Projects;
