import styled from "styled-components/macro";

export const Container = styled.section`
  justify-content: space-around;
  height: calc(100vh - 140px);

  ${({ isCurrent }) =>
    isCurrent
      ? `display: flex;
    transition-duration: 1s;
    transform: scale(1.08);
    `
      : ` display: none;
    transition-duration: 1s ease;`}

  @media(max-width: 1000px) {
    padding-top: 2rem;
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const ContentLeft = styled.div`
  width: 25rem;
  // height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  height: auto;
  align-self: center;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

export const ProjectSubtitle = styled.h3`
  font-size: 1.2rem;
  line-height: 2rem;

  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const ProjectDescription = styled.p`
  min-height: 10rem;
  line-height: 1.5rem;

  @media (max-width: 460px) {
    margin-top: 0.5rem;
    min-height: 15rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`;

export const BoxRedirectProject = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkProject = styled.a`
  color: #ffffff;
`;

export const ButtonBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 460px) {
    justify-content: center;
  }
`;

export const ButtonOfNavigation = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 7rem;
  white-space: nowrap;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  background-color: #7a3209;
  cursor: pointer;
`;

export const ButtonOfNavigationNext = styled(ButtonOfNavigation)`
  color: #7a3209;
  background-color: #ffffff;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 35rem;
  height: auto;
  max-height: 31rem;
  object-fit: cover;
  border-radius: 2px;
`;
