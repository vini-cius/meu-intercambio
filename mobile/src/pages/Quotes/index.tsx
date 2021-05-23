import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import InputSelect from '../../components/InputSelect';
import InputText from '../../components/InputText';

import { 
  Container,
  AddAgencyButton, 
  AddAgencyButtonText,
  TitleDetailsQuote
} from './styles';

const Quotes: React.FC = () => {
  const [agency, setAgency] = useState<string>('2');

  const agencys = [
    {
      label: 'IE intercâmbio',
      value: '1',
    },
    {
      label: 'Egali',
      value: '2',
    },
    {
      label: 'CI',
      value: '3',
    },
    {
      label: 'STB',
      value: '4',
    },
  ];

  const currency = [
    { label: 'R$', value: 'BRL' },
    { label: '$', value: 'USD' }
  ]

  return (
    <Container>
      <ScrollView>
        <View>
          <InputSelect
            options={agencys}
            selectedValue={agency}
            onValueChange={(itemValue: any) => setAgency(itemValue)}
            label="Selecione a agência"
          />

          <AddAgencyButton>
            <Ionicons name="ios-add-circle-sharp" size={24} color="#50fa7b" />
            <AddAgencyButtonText>Cadastrar agência</AddAgencyButtonText>
          </AddAgencyButton>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <InputText
            label="Total do orçamento"
            style={{ width: 280, borderRightWidth: 0 }}
          />

          <InputSelect
            options={currency}
            mode="dropdown"
            style={{ width: 90 }}
            styleContainer={{ marginTop: 5, borderLeftWidth: 0 }}
          />
        </View>

        <InputText
          label="Alguma taxa extra ?"
        />

        <TitleDetailsQuote>Detalhes do orçamento</TitleDetailsQuote>
      </ScrollView>
    </Container>
  );
}

export default Quotes;