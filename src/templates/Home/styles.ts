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
