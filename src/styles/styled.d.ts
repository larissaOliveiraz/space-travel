<<<<<<< HEAD
import styled from "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
=======
import styled from "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
>>>>>>> 69ab5107585813317bcb927949baae08ab6c4629
