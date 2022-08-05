import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import {
  Container,
  ContentScroll,
  Content,
  Title,
  PlanetImage,
  Image,
  Options,
  Option,
  OptionText,
  PlanetName,
  PlanetDescription,
  Separator,
  InfoTitle,
  Info,
} from "./styles";

interface Destinations {
  name: string;
  images: {
    png: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface DestinationProps {
  data: Destinations;
}

export function Destination() {
  const [data, setData] = useState<Destinations>({} as Destinations);
  const [active, setActive] = useState<"moon" | "mars" | "europe" | "titan">(
    "moon"
  );

  async function handleMoon() {
    const { data } = await api.get("destinations/1");
    setData(data);
    setActive("moon");
  }

  async function handleMars() {
    const { data } = await api.get("destinations/2");
    setData(data);
    setActive("mars");
  }

  async function handleEurope() {
    const { data } = await api.get("destinations/3");
    setData(data);
    setActive("europe");
  }

  async function handleTitan() {
    const { data } = await api.get("destinations/4");
    setData(data);
    setActive("titan");
  }

  useEffect(() => {
    async function loadFirstMoon() {
      const { data } = await api.get("destinations/1");
      setData(data);
    }

    loadFirstMoon();
  }, []);

  return (
    <Container
      source={require("../../assets/destination/background-destination-mobile.jpg")}
    >
      <Header />

      <ContentScroll>
        <Content>
          <Title>PICK YOUR DESTINATION</Title>

          <PlanetImage>
            {active === "moon" && (
              <Image
                source={require("../../assets/destination/image-moon.png")}
              />
            )}
            {active === "mars" && (
              <Image
                source={require("../../assets/destination/image-mars.png")}
              />
            )}
            {active === "europe" && (
              <Image
                source={require("../../assets/destination/image-europa.png")}
              />
            )}
            {active === "titan" && (
              <Image
                source={require("../../assets/destination/image-titan.png")}
              />
            )}
          </PlanetImage>

          <Options>
            <Option onPress={handleMoon}>
              <OptionText active={active === "moon"}>MOON</OptionText>
            </Option>
            <Option onPress={handleMars}>
              <OptionText active={active === "mars"}>MARS</OptionText>
            </Option>
            <Option onPress={handleEurope}>
              <OptionText active={active === "europe"}>EUROPA</OptionText>
            </Option>
            <Option onPress={handleTitan}>
              <OptionText active={active === "titan"}>TITAN</OptionText>
            </Option>
          </Options>

          <PlanetName>{data.name}</PlanetName>
          <PlanetDescription>{data.description}</PlanetDescription>

          <Separator />

          <InfoTitle>AVG. DISTANCE</InfoTitle>
          <Info>{data.distance}</Info>

          <InfoTitle>EST. TRAVEL TIME</InfoTitle>
          <Info>{data.travel}</Info>
        </Content>
      </ContentScroll>
    </Container>
  );
}
