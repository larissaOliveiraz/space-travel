<<<<<<< HEAD
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

interface Crew {
  name: string;
  role: string;
  bio: string;
}

export function Crew() {
  const [data, setData] = useState<Crew>({} as Crew);
  const [active, setActive] = useState<"first" | "second" | "third" | "fourth">(
    "first"
  );

  async function handleFirstCrew() {
    const { data } = await api.get("crew/1");
    setData(data);
    setActive("first");
  }
  async function handleSecondCrew() {
    const { data } = await api.get("crew/2");
    setData(data);
    setActive("second");
  }
  async function handleThirdCrew() {
    const { data } = await api.get("crew/3");
    setData(data);
    setActive("third");
  }
  async function handleFourthCrew() {
    const { data } = await api.get("crew/4");
    setData(data);
    setActive("fourth");
  }

  useEffect(() => {
    async function loadFirstCrew() {
      const { data } = await api.get("crew/1");
      setData(data);
    }

    loadFirstCrew();
  }, []);

  return (
    <Container source={require("../../assets/crew/background-crew-mobile.jpg")}>
      <Header />
      <ContentScroll>
        <Content>
          <Title>MEET YOUR CREW</Title>

          <CrewImage>
            {active === "first" && (
              <Image
                source={require("../../assets/crew/image-douglas-hurley.png")}
              />
            )}
            {active === "second" && (
              <Image
                source={require("../../assets/crew/image-mark-shuttleworth.png")}
              />
            )}
            {active === "third" && (
              <Image
                source={require("../../assets/crew/image-victor-glover.png")}
              />
            )}
            {active === "fourth" && (
              <Image
                source={require("../../assets/crew/image-anousheh-ansari.png")}
              />
            )}
          </CrewImage>

          <Separator />

          <Options>
            <Option onPress={handleFirstCrew} active={active === "first"}>
              <OptionText>1</OptionText>
            </Option>
            <Option onPress={handleSecondCrew} active={active === "second"}>
              <OptionText>2</OptionText>
            </Option>
            <Option onPress={handleThirdCrew} active={active === "third"}>
              <OptionText>3</OptionText>
            </Option>
            <Option onPress={handleFourthCrew} active={active === "fourth"}>
              <OptionText>4</OptionText>
            </Option>
          </Options>

          <InfoUpperTitle>{data.role}</InfoUpperTitle>
          <InfoTitle>{data.name}</InfoTitle>
          <Description>{data.bio}</Description>
        </Content>
      </ContentScroll>
    </Container>
  );
}
=======
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

interface Crew {
  name: string;
  role: string;
  bio: string;
}

export function Crew() {
  const [data, setData] = useState<Crew>({} as Crew);
  const [active, setActive] = useState<"first" | "second" | "third" | "fourth">(
    "first"
  );

  async function handleFirstCrew() {
    const { data } = await api.get("crew/1");
    setData(data);
    setActive("first");
  }
  async function handleSecondCrew() {
    const { data } = await api.get("crew/2");
    setData(data);
    setActive("second");
  }
  async function handleThirdCrew() {
    const { data } = await api.get("crew/3");
    setData(data);
    setActive("third");
  }
  async function handleFourthCrew() {
    const { data } = await api.get("crew/4");
    setData(data);
    setActive("fourth");
  }

  useEffect(() => {
    async function loadFirstCrew() {
      const { data } = await api.get("crew/1");
      setData(data);
    }

    loadFirstCrew();
  }, []);

  return (
    <Container source={require("../../assets/crew/background-crew-mobile.jpg")}>
      <Header />
      <ContentScroll>
        <Content>
          <Title>MEET YOUR CREW</Title>

          <CrewImage>
            {active === "first" && (
              <Image
                source={require("../../assets/crew/image-douglas-hurley.png")}
              />
            )}
            {active === "second" && (
              <Image
                source={require("../../assets/crew/image-mark-shuttleworth.png")}
              />
            )}
            {active === "third" && (
              <Image
                source={require("../../assets/crew/image-victor-glover.png")}
              />
            )}
            {active === "fourth" && (
              <Image
                source={require("../../assets/crew/image-anousheh-ansari.png")}
              />
            )}
          </CrewImage>

          <Separator />

          <Options>
            <Option onPress={handleFirstCrew} active={active === "first"}>
              <OptionText>1</OptionText>
            </Option>
            <Option onPress={handleSecondCrew} active={active === "second"}>
              <OptionText>2</OptionText>
            </Option>
            <Option onPress={handleThirdCrew} active={active === "third"}>
              <OptionText>3</OptionText>
            </Option>
            <Option onPress={handleFourthCrew} active={active === "fourth"}>
              <OptionText>4</OptionText>
            </Option>
          </Options>

          <InfoUpperTitle>{data.role}</InfoUpperTitle>
          <InfoTitle>{data.name}</InfoTitle>
          <Description>{data.bio}</Description>
        </Content>
      </ContentScroll>
    </Container>
  );
}
>>>>>>> 69ab5107585813317bcb927949baae08ab6c4629
