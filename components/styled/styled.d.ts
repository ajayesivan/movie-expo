import 'styled-components';
import { Theme } from 'styled-system';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {
    colors: {
      textPrimary: string,
      textSecondary: string,
      bg: string,
      primary: string,
    }
    fontSizes: number[],
    fonts: {
      regular: string
      bold: string
      italic: string
    }
  }
}
