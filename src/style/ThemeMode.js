import { styled } from "styled-components";

const ThemeMode = styled`
	background : ${({ Theme }) => Theme.backgroundColor};
	color: ${({ Theme }) => Theme.color};
`;

export default ThemeMode;
