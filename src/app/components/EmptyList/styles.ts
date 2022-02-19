import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const EmptyListContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(80)}px;
`;

export const EmptyListTitle = styled.Text`
  width: 90%;
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text };
  margin-top: 50px;
  text-align: center;
`;