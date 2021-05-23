import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #282A36;
  padding: 40px 10px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  align-items: center;
`;

export const HeaderTitleText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  line-height: 32px;
  color: #ff79c6;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MoneyText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: #f2f2f2;
`;

export const BalanceBox = styled.View`
  width: 180px;
  height: 160px;

  justify-content: center;
  align-items: center;

  padding: 5px;

  background: transparent;
  border: 2px solid #bd93f9;
  border-radius: 35px;
`;

export const BalanceTitle = styled.Text`
  color: #f2f2f2;
  font-family: 'Archivo_700Bold';
  font-size: 18px;
`;

export const BalanceValue = styled.Text<{ color?: string }>`
  color: ${props => props.color || '#f2f2f2'};
  font-size: 23px;
  font-family: 'Poppins_600SemiBold';

  margin-top: 26px;
`;

export const AgencyContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const QuotesDetails = styled.SafeAreaView`
  width: 100%;
  height: 310px;
  margin-top: 30px;
  padding: 8px;
`;

export const LastAgencyQuotes = styled.Text`
  color: #ff79c6;
  font-size: 24px;
  font-family: 'Archivo_700Bold';
`;

export const DetailsLastAgencyQuote = styled.Text`
  color: #F2F2F2;
  font-size: 15px;
  font-family: 'Archivo_400Regular';
  padding: 3px 0;
`;

export const FixesBudget = styled.Text`
  color: #ff79c6;
  font-size: 22px;
  font-family: 'Archivo_700Bold';

  margin-top: 20px;
`;

export const DetailsFixesBudget = styled.Text`
  color: #F2F2F2;
  font-size: 15px;
  font-family: 'Archivo_400Regular';
  padding: 3px 0;
`;