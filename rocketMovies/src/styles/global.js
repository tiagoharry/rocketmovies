import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background:  #1C1B1E;
  --font-family: 'Roboto Slab', serif;
  --title-color: #FF859B;
  --subtitle-color: #F4EDE8;
  --text-color: #999591;
  --button-pink: #FF859B;
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, button {
  font-family: var(--font-family);
}

a {
  text-decoration: none;
  color: #FF859B;
}

button, a {
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #999591;
}

a:hover {
  color: #F4EDE8;
}
`

