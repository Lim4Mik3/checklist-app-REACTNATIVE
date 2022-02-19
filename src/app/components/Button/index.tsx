import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, ButtonTitle } from './styles'

interface ButtonProps extends TouchableOpacityProps{
  children: ReactNode;
  buttonType: 'SUCCESS' | 'CTA' | 'SECONDARY' | 'AUX';
}

export default function Button({ children, buttonType, ...rest }: ButtonProps): JSX.Element {
  return (
    <ButtonContainer {...rest} buttonType={buttonType}>
      <ButtonTitle buttonType={buttonType}>
        {children}
      </ButtonTitle>
    </ButtonContainer>
  )
}