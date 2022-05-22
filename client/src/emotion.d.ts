import "@emotion/react";
import theme from './shared/theme';

declare module "@emotion/react" {
  export interface Theme {
    brand: {
      default: string;
      yellowOrange: string;
      white: string;
      white_bg: string;
      black: string;
      lightBlack: string;
      grey: string;
      yellowOrangeDark: string;
    }
  }
}
