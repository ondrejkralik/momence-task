import { gray } from '@radix-ui/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		padding: 0;
		margin: 0;
		background-color: ${gray.gray2},
	}
`;

export default GlobalStyles;
