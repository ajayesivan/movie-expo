import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    textPrimary: "#FFFFFF",
    textSecondary: "#FFFFFFCC",
    primary: "#010F1D",
    bg: "#566F81",
    placeholder: "#FFFFFFB3",
    bgHighlight: "#FFFFFF1A",
  },
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "18px",
    l: "22px",
    xl: "24px",
  },
  fonts: {
    regular: "OpenSans-Regular",
    bold: "OpenSans-Bold",
    italic: "OpenSans-Italic",
    boldItalic: "OpenSans-BoldItalic",
  },
  activeOpacity: 0.8,
  radii: {
    xxs: "1px",
    xs: "2px",
    s: "4px",
    l: "8px",
    xl: "12px",
  },
};

export default theme;
