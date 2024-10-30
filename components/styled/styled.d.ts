import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      text: string,
      bg: string
    }
    fonts: {
      regular: string
      bold: string
      italic: string
    }
  }
}
