import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { 
  Container, 
  Main,
  Title, 
  ButtonContainer, 
  Button, 
  ButtonText 
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToDestinyHomePage(destinyName: String){
    navigate('Destiny', { destinyName: destinyName });
  }

  return (
    <Container>
      <Main>
        <Title>Meu{'\n'}Intercâmbio</Title>

        <ButtonContainer>
          <Button onPress={() => handleNavigateToDestinyHomePage('Canadá')}>
            <ButtonText>Canadá</ButtonText>
            <Feather name="chevron-right" color="#000" size={30} />
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button onPress={() => handleNavigateToDestinyHomePage('New York')}>
            <ButtonText>New York</ButtonText>
            <Feather name="chevron-right" color="#000" size={30} />
          </Button>
        </ButtonContainer>
      </Main>
    </Container>
  );
}

export default Home;