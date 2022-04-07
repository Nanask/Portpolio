import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import tw from "tailwind-styled-components";
import { useThemecontext } from "./../provider/ModeProvider";
import Project from "./../comps/Project";
import { styled } from "@mui/material/styles";
import { light } from "./Theme";

export const Globalstyle = createGlobalStyle`
${reset}

.header {
  background-color: ${({ theme }) => theme.odd.bgColor};
  color: ${({ theme }) => theme.odd.textColor};
}
.intro {
  background-color: ${({ theme }) => theme.even.bgColor};
  color: ${({ theme }) => theme.even.textColor};
}
.project {
  background-color: ${({ theme }) => theme.odd.bgColor};
  color: ${({ theme }) => theme.odd.textColor};
}
.skill {
  background-color: ${({ theme }) => theme.even.bgColor};
  color: ${({ theme }) => theme.even.cotextColorlor};
}
.footer {
  background-color: ${({ theme }) => theme.odd.bgColor};
}
.slider {
  background-color: ${(props) => (props.theme === light ? "white" : "#7f7f7f")};
}

.head_line {
  color: ${({ theme }) => theme.odd.textColor};
}

body , .head_line, p {
  color: ${(props) => (props.theme === light ? "black" : "white")};
`;

//  background-color: ${(props) => (props.theme === props.light ? "#e9d5a1" : "#494949")};
// body {
//   background-color: ${({ theme }) => theme.bgColor};
//   color : ${({ theme }) => theme.textColor};
// }

// .head_line {
//   color: ${({ theme }) => theme.odd.textColor};
// }
