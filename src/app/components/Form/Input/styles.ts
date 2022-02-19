import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

type InputContainerProps = {
  error: boolean;
}

export const InputContainer = styled.TextInput<InputContainerProps>`
  border-width: ${RFValue(1)}px;
  border-color: #29292e;
  padding: ${RFValue(8)}px;
  height: 45px;
  font-size: ${RFValue(14)}px;
  border-radius: 12px;
  background-color: #fafafa;
  border-width: 1px;
  border-color: ${props => props.error ? '#f22e2e' : '#29292e'}
`;

export const InputLabel = styled.Text`
  margin: 0 ${RFValue(4)}px;
  color: #29292e;
`;

export const InputError = styled.Text`
  margin: 0 ${RFValue(4)}px;
  color: ${({ theme }) => theme.colors.error };
`;