import "styled-components";
import { Theme } from "styled-system";

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {
    colors: {
      textPrimary: string;
      textSecondary: string;
      bg: string;
      primary: string;
    };
    fontSizes: number[];
    fonts: {
      regular: string;
      bold: string;
      italic: string;
      boldItalic: string;
    };
    activeOpacity: number;
    radii: {
      xxs: string;
      xs: string;
      s: string;
      l: string;
      xl: string;
    };
  }
}
