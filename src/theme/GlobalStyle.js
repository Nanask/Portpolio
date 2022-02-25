import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`
${reset}
body {
	background-color: ${({ theme }) => theme.bgColor}
	color: ${({ theme }) => theme.color}
}
`;
