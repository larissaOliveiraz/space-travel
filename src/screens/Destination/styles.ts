import { ImageBackground, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface OptionSelected {
  active: boolean;
}

export const Container = styled(ImageBackground)`
  flex: 1;
`;

export const ContentScroll = styled.ScrollView``;

export const Content = styled.View`
  align-items: center;

  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(16)}px;

  margin-bottom: 32px;
`;

export const PlanetImage = styled.View``;

export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;

export const Options = styled.View`
  flex-direction: row;
  margin-top: 26px;
`;

export const Option = styled(TouchableOpacity)`
  margin-left: 13px;
  margin-right: 13px;
`;

export const OptionText = styled.Text<OptionSelected>`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(14)}px;

  ${({ active, theme }) =>
    active &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${theme.colors.shape};
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
      color: ${theme.colors.shape};
    `}
`;

export const PlanetName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(56)}px;

  margin-top: 20px;
  text-transform: uppercase;
`;

export const PlanetDescription = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(15)}px;

  text-align: center;
  line-height: 25px;
`;

export const Separator = styled.View`
  width: 95%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 32px;
`;

export const InfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(14)}px;

  margin-top: 32px;
  margin-bottom: 12px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(28)}px;

  text-transform: uppercase;
`;
