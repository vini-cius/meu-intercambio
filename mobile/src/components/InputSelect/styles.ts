import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Label = styled.Text`
  padding: 10px 0;
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #f2f2f2;
`;

export const Select = styled(Picker)`
  height: 50px;
  color: #f2f2f2;
`;

export const SelectContainer = styled.View`
  border: 0.5px solid #bd93f9;
  border-radius: 8px;
`;