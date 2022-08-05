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

export const CrewImage = styled.View``;

export const Image = styled.Image`
  width: 380px;
  height: 330px;
`;

export const Separator = styled.View`
  width: 95%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Options = styled.View`
  flex-direction: row;
  margin-top: 26px;
`;

export const Option = styled(TouchableOpacity)<OptionSelected>`
  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.secondary};

  ${({ theme, active }) =>
    active
      ? css`
          background-color: ${theme.colors.shape};
        `
      : css`
          background-color: ${theme.colors.secondary};
        `}

  border-radius: 20px;

  align-items: center;
  justify-content: center;

  margin-left: 13px;
  margin-right: 13px;
`;

export const OptionText = styled.Text`
  color: ${({ theme }) => theme.colors.prymary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(14)}px;
`;

export const InfoUpperTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const InfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(24)}px;

  text-transform: uppercase;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(15)}px;

  text-align: center;
  line-height: 25px;
  margin-top: 16px;
`;
