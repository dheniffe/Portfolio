import styled from "styled-components/macro";
import BackgroundImg from "../../assets/images/BackgroundHome.png";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 1rem;
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const ContentLeft = styled.div`
  padding: 5rem 0 2rem 0;
  width: 40rem;

  @media (max-width: 648px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;

  @media (max-width: 648px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  margin: 1.5rem 0;
  padding: 0.5rem;
  width: fit-content;
  border-radius: 10px;
  background-color: #7a3209;

  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 648px) {
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const BoxSkillIcons = styled.div`
  margin-top: 9rem;
  display: flex;
  align-items: flex-end;
  gap: 4rem;

  @media (max-width: 648px) {
    margin-top: 5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SkillIcon = styled.figure`
  position: relative;

  :hover {
    color: #292727;
  }
`;

export const HoverTextOnIcon = styled.figcaption`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  :hover {
    width: 4.5rem;
    padding: 0.2rem;
    opacity: 1;
    text-align: center;
    color: #292727;
    background-color: #ffffff;
    border-radius: 2px;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackgroundCircle = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-color: #7a3209;
  background-image: url(${BackgroundImg});
  background-size: cover;

  @media (max-width: 1200px) {
    margin: 2rem 0;
    width: 20rem;
    height: 20rem;
  }
`;

export const BoxSocialMediaIcons = styled.div`
  align-self: flex-end;

  @media (max-width: 1200px) {
    display: flex;
    align-self: center;
    gap: 3rem;
  }
`;

export const SocialMediaIcon = styled.figure`
  margin-top: 1rem;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const SocialMediaLink = styled.a`
  color: #ffffff;
`;
