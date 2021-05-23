import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #282A36;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: #ff79c6;
  font-family: 'Poppins_600SemiBold';
  font-size: 40px;
  line-height: 45px;
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
`;

export const Button = styled(RectButton)`
  height: 60px;
  width: 100%;
  border-radius: 8px;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #50fa7b;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-family: 'Archivo_700Bold';
  font-size: 20px;
`;