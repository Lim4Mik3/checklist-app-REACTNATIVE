import { TextInputProps } from 'react-native'
import { ErrorSchema } from '../ControlledInput'
import { InputContainer, InputLabel, InputError } from './styles'

interface InputProps extends TextInputProps {
  label: string;
  error?: ErrorSchema;
}

export default function Input({ label, error, ...rest }: InputProps): JSX.Element {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer {...rest} error={!!error} />
    </>
  )
}