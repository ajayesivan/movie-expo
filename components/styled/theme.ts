import { Theme } from "styled-system";

const theme:Theme = {
  colors: {
    white: "#FFFFFF",
  },
  fontSizes: [12, 14, 18, 22, 24],
  fonts: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
    italic: 'OpenSans-Italic'
  }
} as const;

export default theme;
