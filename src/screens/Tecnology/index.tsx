import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import {
  Container,
  ContentScroll,
  Content,
  Title,
  CrewImage,
  Image,
  Separator,
  Options,
  Option,
  OptionText,
  InfoUpperTitle,
  InfoTitle,
  Description,
} from "./styles";

interface Technology {
  name: string;
  description: string;
}

export function Tecnology() {
  const [data, setData] = useState<Technology>({} as Technology);
  const [active, setActive] = useState<"launch" | "spaceport" | "space">(
    "launch"
  );

  async function handleLaunch() {
    const { data } = await api.get("technology/1");
    setData(data);
    setActive("launch");
  }
  async function handleSpaceport() {
    const { data } = await api.get("technology/2");
    setData(data);
    setActive("spaceport");
  }
  async function handleSpace() {
    const { data } = await api.get("technology/3");
    setData(data);
    setActive("space");
  }

  useEffect(() => {
    async function loadFirstCrew() {
      const { data } = await api.get("technology/1");
      setData(data);
    }

    loadFirstCrew();
  }, []);

  return (
    <Container
      source={require("../../assets/technology/background-technology-mobile.jpg")}
    >
      <Header />
      <ContentScroll>
        <Content>
          <Title>MEET YOUR CREW</Title>

          <CrewImage>
            {active === "launch" && (
              <Image
                source={require("../../assets/technology/image-launch-vehicle-portrait.jpg")}
              />
            )}
            {active === "spaceport" && (
              <Image
                source={require("../../assets/technology/image-spaceport-portrait.jpg")}
              />
            )}
            {active === "space" && (
              <Image
                source={require("../../assets/technology/image-space-capsule-portrait.jpg")}
              />
            )}
          </CrewImage>

          <Separator />

          <Options>
            <Option onPress={handleLaunch} active={active === "launch"}>
              <OptionText>1</OptionText>
            </Option>
            <Option onPress={handleSpaceport} active={active === "spaceport"}>
              <OptionText>2</OptionText>
            </Option>
            <Option onPress={handleSpace} active={active === "space"}>
              <OptionText>3</OptionText>
            </Option>
          </Options>

          <InfoUpperTitle>THE TERMINOLOGY…</InfoUpperTitle>
          <InfoTitle>{data.name}</InfoTitle>
          <Description>{data.description}</Description>
        </Content>
      </ContentScroll>
    </Container>
  );
}
