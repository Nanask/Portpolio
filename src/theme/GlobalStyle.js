import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import tw from "tailwind-styled-components";
import { useThemecontext } from "./../provider/ModeProvider";
import Project from "./../comps/Project";
import { styled } from "@mui/material/styles";
import { light } from "./Theme";

export const Globalstyle = createGlobalStyle`
${reset}

.header, .project , .footer, .modal {
  background-color: ${({ theme }) => theme.odd.bgColor};
}
.intro, .skill , #root{
  background-color: ${({ theme }) => theme.even.bgColor};
}

.slider {
  background-color: ${(props) => (props.theme === light ? "white" : "#7f7f7f")};
}


.nav_bar {
  color: ${(props) => (props.theme === light ? "black" : "white")};
}

p, h1, h2, .icon , .skills, .nav_li {
  color: ${(props) => (props.theme === light ? "black" : "white")};
`;

// background-color: ${(props) => (props.theme === light ? "white" : "black")}
//   background-color: white;

// .navbar_scroll {
//   background-color: ${(props) => (props.theme === light ? "white" : "black")};
//   transition: all 300ms ease-in-out;
//   opacity : 0.9;
// }
