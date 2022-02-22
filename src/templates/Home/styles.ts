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
`;

export const Main = styled.main`
  display: flex;
`;

export const EpisodesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
