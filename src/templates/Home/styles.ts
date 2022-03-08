import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  padding: var(--medium);
  width: var(--container);
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  color: var(--highlight);
  margin-bottom: 4rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharactersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  outline: 0px;
  border-radius: var(--radius);
  margin-bottom: 40px;
  height: 50px;
  background: #29292e;
  color: var(--highlight);
  border: 1px solid #29292e;
  padding: 5px;
  width: 400px;
`;
