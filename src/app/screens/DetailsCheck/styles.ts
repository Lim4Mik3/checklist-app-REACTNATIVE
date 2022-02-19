import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const DetailsCheckContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
  height: 100%;
`;

export const DetailsWrapper = styled.View`
  height: 100%;
  background-color: #fafafa;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  padding: ${RFValue(8)}px ${RFValue(8)}px ${RFValue(24)}px;
`;

export const InfoGroup = styled.View`
  padding: 20px 10px;
`;

export const Divider = styled.View`
  flex-direction: row;
  width: 100%;
  border-width: 1px;
  border-color: #ffbd38;
`;

export const InfoText = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.Roboto_700Bold };
  color: ${({ theme }) => theme.colors.text };
`;

export const InfoItem = styled.Text`
  font-size: 16px;
  margin-right: 6px;
  font-family: ${({ theme }) => theme.fonts.Roboto_300Light };
  color: ${({ theme }) => theme.colors.text };
`;

export const SubInfoGroup = styled.View`
  flex-direction: row;
  padding: 15px 10px;
`;

export const SubInfoText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.Roboto_500Medium };
  color: ${({ theme }) => theme.colors.text_secondary };
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px;
`;