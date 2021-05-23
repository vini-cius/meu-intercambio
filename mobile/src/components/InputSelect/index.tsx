import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { PickerProps } from '@react-native-picker/picker/typings/Picker';
import { View, ViewStyle } from 'react-native';

import { Select, Label, SelectContainer } from './styles';

interface SelectProps extends PickerProps {
  label?: string;
  styleContainer?: ViewStyle;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const InputSelect: React.FC<SelectProps> = ({ label, styleContainer, options, ...rest }) => {
  return (
    <View>
      <Label>{label}</Label>

      <SelectContainer {...styleContainer}>
        <Select
          dropdownIconColor="#bd93f9"
          {...rest}
        >
          {options.map(option => 
            <Picker.Item 
              key={option.value} 
              color="#44475a" 
              label={option.label} 
              value={option.value} 
            />
          )}
        </Select>
      </SelectContainer>
    </View>
  );
}

export default InputSelect;