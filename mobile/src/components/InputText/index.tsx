import React from 'react';
import { TextInputProps, View } from 'react-native';

import { Label, Input } from './styles';

interface InputProps extends TextInputProps {
  label?: string;
}

const InputText: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <View>
      <Label>{label}</Label>
      <Input {...rest} />
    </View>
  );
}

export default InputText;