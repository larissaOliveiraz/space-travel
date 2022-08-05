import React from "react";

import LogoSvg from "../../assets/shared/logo.svg";
import MenuSvg from "../../assets/shared/icon-hamburger.svg";

import { Container, Button } from "./styles";

export function Header() {
  return (
    <Container>
      <Button>
        <LogoSvg width={48} height={48} />
      </Button>

      {/* <Button>
        <MenuSvg width={48} height={48} />
      </Button> */}
    </Container>
  );
}
