import { ImageBackground, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(ImageBackground)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 48px;
`;

export const UpperTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(16)}px;

  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(80)}px;

  margin-bottom: 24px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(15)}px;

  text-align: center;
  line-height: 25px;
`;

export const Button = styled(TouchableOpacity)`
  width: 200px;
  height: 200px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 100px;

  justify-content: center;
  align-items: center;

  margin-top: 81px;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.prymary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(20)}px;
`;
