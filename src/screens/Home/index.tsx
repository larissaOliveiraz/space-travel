import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Header } from "../../components/Header";

import {
  Container,
  Content,
  UpperTitle,
  Title,
  SubTitle,
  Button,
  ButtonTitle,
} from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  function handleExplore() {
    navigate("Destinations");
  }

  return (
    <Container source={require("../../assets/home/background-home-mobile.jpg")}>
      <Header />

      <Content>
        <UpperTitle>SO, YOU WANT TO TRAVEL TO</UpperTitle>
        <Title>SPACE</Title>
        <SubTitle>
          Let’s face it; if you want to go to space, you might{"\n"}
          as well genuinely go to outer space and not hover{"\n"}
          kind of on the edge of it. Well sit back, and relax{"\n"}
          because we’ll give you a truly out of this world{"\n"}
          experience!
        </SubTitle>

        <Button activeOpacity={0.8} onPress={handleExplore}>
          <ButtonTitle>EXPLORE</ButtonTitle>
        </Button>
      </Content>
    </Container>
  );
}
