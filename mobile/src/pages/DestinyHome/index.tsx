import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  TopBar,
  HeaderTitle,
  HeaderTitleText,
  MoneyText,
  BalanceContainer,
  BalanceBox,
  BalanceTitle,
  BalanceValue,
  AgencyContainer,
  QuotesDetails,
  LastAgencyQuotes,
  DetailsLastAgencyQuote,
  FixesBudget,
  DetailsFixesBudget
} from './styles';

import InputSelect from '../../components/InputSelect';

const DestinyHome: React.FC = () => {
  const { navigate } = useNavigation();
  const [ agency, setAgency ] = useState<number>(4);

  const budget = 20000.00
  const totalBalance = 22522.00;

  let finalBalance = 0;
  finalBalance = budget - totalBalance;

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

  function handleGoBack() {
    navigate('Home');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Ionicons name="chevron-back" color="#f2f2f2" size={28} />
        </BorderlessButton>
      </TopBar>

      <HeaderTitle>
        <HeaderTitleText>New York</HeaderTitleText>
      </HeaderTitle>

      <BalanceContainer>
        <BalanceBox>
          <BalanceTitle>Meu orçamento</BalanceTitle>
          <BalanceValue>R$ 18.522,00</BalanceValue>
          <Ionicons name="ios-pencil" color="#f2f2f2" size={18} />
        </BalanceBox>

        <BalanceBox>
          <BalanceTitle>
            {finalBalance < 0 ? `🙄 Ainda falta` : `🤑 Está sobrando!`}
          </BalanceTitle>
          <BalanceValue color={finalBalance < 0 ? '#ff5555' : '#50fa7b'}>
            <Text style={{ color: '#f2f2f2' }}>R$</Text> {finalBalance}
          </BalanceValue>
        </BalanceBox>
      </BalanceContainer>

      <AgencyContainer>
        <InputSelect 
          options={agencys} 
          label="Selecione a agência" 
          selectedValue={agency}
          onValueChange={ (itemValue: any) => setAgency(itemValue) }
        />
      </AgencyContainer>

      <QuotesDetails>
        <ScrollView persistentScrollbar={true} indicatorStyle="white">
          <LastAgencyQuotes>
            Última cotação: <MoneyText>R$ 13.415,40</MoneyText>
          </LastAgencyQuotes>

          <View>
            <DetailsLastAgencyQuote><AntDesign name="pushpin" size={14} color="#bd93f9" /> Language Studies international/LSI;</DetailsLastAgencyQuote>
            <DetailsLastAgencyQuote><AntDesign name="pushpin" size={14} color="#bd93f9" /> 4 Semanas / 20 Lessons/Week;</DetailsLastAgencyQuote>
            <DetailsLastAgencyQuote><AntDesign name="pushpin" size={14} color="#bd93f9" /> Período Previsto: 13/09/2021 A 08/10/2021;</DetailsLastAgencyQuote>
            <DetailsLastAgencyQuote><AntDesign name="pushpin" size={14} color="#bd93f9" /> Homestay (Brooklyn) / Sara's homestay;</DetailsLastAgencyQuote>
            <DetailsLastAgencyQuote><AntDesign name="pushpin" size={14} color="#bd93f9" /> Single Room / Half Board (monday - friday) + Breakfast (Weekend);</DetailsLastAgencyQuote>
          </View>

          <FixesBudget>
            Total Gastos Fixos: <MoneyText>R$ 12.102,00</MoneyText>
          </FixesBudget>

          <View>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Visto: <MoneyText>R$ 835,20</MoneyText></DetailsFixesBudget>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Passagens:  <MoneyText>R$ 3.000,00</MoneyText></DetailsFixesBudget>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Malas: <MoneyText>R$ 500,00</MoneyText></DetailsFixesBudget>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Transporte 30 dias: <MoneyText>R$ 650,20</MoneyText></DetailsFixesBudget>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Seguro viagem: <MoneyText>R$ 450,00</MoneyText></DetailsFixesBudget>
            <DetailsFixesBudget><AntDesign name="pushpin" size={14} color="#bd93f9" /> Dinheiro para gastar: <MoneyText>R$ 8.130,00 ($ 1500.00)</MoneyText></DetailsFixesBudget>
          </View>
        </ScrollView>
      </QuotesDetails>
    </Container>
  );
}

export default DestinyHome;