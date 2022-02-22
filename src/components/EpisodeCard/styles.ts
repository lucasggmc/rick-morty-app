import styled from "styled-components";

type ContainerProps = {
  image: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 150px;
  height: 200px;
  background-color: var(--highlight);
  background: url(${(props) => props.image || ""});
`;
