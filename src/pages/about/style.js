import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const Card = styled.div`
  padding: 1rem;
  width: min-content;
  height: fit-content;
  border-radius: 10px;
  background-color: #7a3209;
  box-shadow: 0px 7px 6px #191717;
  cursor: pointer;
`;

export const Modal = styled.div`
  padding: 1rem;
  width: fit-content;

  ${({ itemSelected }) =>
    itemSelected
      ? `
    display: inline-block;
    `
      : `display: none;`}
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

export const ModalDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
