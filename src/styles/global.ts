import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --highlight: #D53F8C;
  --background: #121214;
  --white: #eeeeee;

  --container: 100rem;
  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;

  --radius: 4.5px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body, #__next {
  height: 100%;
  background: var(--background);
  color: var(--white);
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
}

p, a {
  font-size: 2rem;
  line-height: var(--medium);
}
a {
  color: var(--highlight);
}

`;

export default GlobalStyles;
