import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #282a36;
  padding: 40px 10px;
`;

export const AddAgencyButton = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 190px;

  margin-top: 10px;
  margin-left: auto;
`;

export const AddAgencyButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 18px;
  color: #50fa7b;
`;


export const TitleDetailsQuote = styled.Text`
  color: #ff79c6;
  font-size: 24px;
  font-family: 'Archivo_700Bold';

  margin-top: 30px;
`;