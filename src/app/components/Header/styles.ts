import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import {NativeModules, Platform} from 'react-native';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

export const HeaderContainer = styled.View`
  flex-direction: row;
  

  padding-top: ${STATUSBAR_HEIGHT}px;
  padding-bottom: 10px;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto_700Bold };
  font-size: ${RFValue(18)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange_600 };
`;