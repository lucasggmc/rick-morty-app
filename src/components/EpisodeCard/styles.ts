import styled from "styled-components";

type ContainerProps = {
  image: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 350px;
  background-color: var(--highlight);
  color: #000000;
  font-weight: 600;
  background: url(${(props) => props.image || ""}) no-repeat center center;
  background-size: cover;
  border-radius: var(--radius);

  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  color: var(--highlight);
`;

export const Title = styled.h1`
  padding: 5px;
  text-align: end;
`;
