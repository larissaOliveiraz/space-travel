import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: ${getStatusBarHeight()}px;
  padding: 24px;
`;

export const Button = styled(TouchableOpacity).attrs({ activeOpacity: 0.7 })``;
