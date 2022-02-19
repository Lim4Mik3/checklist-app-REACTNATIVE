import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native'

type ColorScheme = {
  buttonType: 'SUCCESS' | 'CTA' | 'SECONDARY' | 'AUX';
}

type HashColorsFields = {
  [key: string]: {
    background: string;
    title: string;
  }
};

const HashColors: HashColorsFields = {
  'SUCCESS': {  
    background: '#61D095',
    title: '#393939'
  },
  'CTA': {
    background: '#FF6700',
    title: '#FAFAFA'
  },
  'SECONDARY': {
    background: '#F7FFF7',
    title: '#292F36'
  },
  'AUX': {
    background: '#839D9A',
    title: '#292929'
  },
};

export const ButtonContainer = styled.TouchableOpacity<ColorScheme>`
  width: ${RFValue(120)}px;
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  background-color: ${props => HashColors[props.buttonType].background};

  border-width: 1px;
  border-color: #ccc;
`;

export const ButtonTitle = styled.Text<ColorScheme>`
  font-size: ${RFValue(14)}px;
  color: ${props => HashColors[props.buttonType].title};
`;