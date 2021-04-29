import 'styled-components';

interface IPalette {
  lightGray: string;
  darkGray: string;
  snowWhite: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
  }
}
