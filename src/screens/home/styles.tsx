import styled from 'styled-components/native';
import { Card as CardPaper } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Card = styled(CardPaper)`
  justify-content: center;

  margin-left: 30px;
  margin-right: 30px;
  padding: 20px;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
`;

export const Item = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ButtonRefresh = styled.TouchableOpacity`
  align-self: center;
  margin-top: 20px;
`;
