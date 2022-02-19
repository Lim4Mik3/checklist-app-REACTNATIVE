import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const ListChecksContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
`;

export const ListContainer = styled.View`
  height: 100%;
  background-color: #fafafa;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  padding: 0 ${RFValue(8)}px;
`;

export const ListActions = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  padding: ${RFValue(16)}px ${RFValue(8)}px;
`;

export const ListWrapper = styled.View`
  height: 60%;
`;
