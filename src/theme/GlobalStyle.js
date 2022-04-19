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

.navbar_scroll {
  background-color: ${(props) => (props.theme === light ? "white" : "#232323")};
  transition: all 300ms ease-in-out;
  opacity : 0.9;
}

.nav_bar {
  color: ${(props) => (props.theme === light ? "black" : "white")};
}

p, h1, h2, .icon , .skills, .nav_li {
  color: ${(props) => (props.theme === light ? "black" : "white")};
`;

// background-color: ${(props) => (props.theme === light ? "white" : "black")}
//   background-color: white;
// p-3 hover: cursor-pointer bg-bg-nav rounded-md text-gray-50 transition-all
// // .nav-link {
//   padding : 0.75rem;
//   background-color : #232323;
// }
