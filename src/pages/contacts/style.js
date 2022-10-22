import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 500px;
`;

export const ContactBox = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const FormLegend = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const FormContact = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  text-indent: 0.5rem;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #7a3209;
  background-color: inherit;

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #292727 inset;
    -webkit-text-fill-color: #ffffff;
  }

  @media (max-width: 1000px) {
    height: 3rem;
    font-size: 1.5rem;
  }
`;

export const TextAreaForm = styled.textarea`
  width: 100%;
  resize: none;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #7a3209;
  background-color: inherit;
`;

export const SendButton = styled.button`
  width: 7rem;
  height: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
  align-self: center;
  border-radius: 5px;
  border: 1px solid #7a3209;
  background-color: inherit;

  @media (max-width: 1000px) {
    width: 10rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;
