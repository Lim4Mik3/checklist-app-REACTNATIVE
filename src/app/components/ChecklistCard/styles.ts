import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const ChecklistContainer = styled.TouchableOpacity`
  justify-content: space-between;
  min-height: ${RFValue(110)}px;

  padding: ${RFValue(12)}px;
  border-radius: 16px;
  background-color: #f0f0f0;

  margin-bottom: 12px;
  border-width: ${RFValue(1)}px;
  border-color: #ddd;
`;

export const CheckListBasicInfos = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FarmName = styled.Text`
  font-family: ${({ theme}) => theme.fonts.Roboto_500Medium };
  color: ${({ theme }) => theme.colors.text_secondary };
  font-size: ${RFValue(15)}px;
`;

export const FarmLocation = styled.Text`
  font-family: ${({ theme}) => theme.fonts.Roboto_300Light };
  color: ${({ theme }) => theme.colors.text_secondary };
  font-size: ${RFValue(13)}px;
`;

export const CreationDate = styled.Text`
  font-family: ${({ theme}) => theme.fonts.Roboto_700Bold };
  color: ${({ theme }) => theme.colors.orange_600 };
  font-size: ${RFValue(13)}px;
`;

export const CheckListType = styled.View`
  border-radius: 8px;
  justify-content: center;
`;

export const CheckListTypeText = styled.Text`
  text-transform: uppercase;
  color: red;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CheckListStatus = styled.Text`
  font-family: ${({ theme}) => theme.fonts.Roboto_300Light };
  color: green;
  font-size: ${RFValue(10)}px;
`;

export const FarmerName = styled.Text`
  font-family: ${({ theme}) => theme.fonts.Roboto_500Medium };
  color: ${({ theme }) => theme.colors.text_secondary };
  font-size: ${RFValue(15)}px;
`;
