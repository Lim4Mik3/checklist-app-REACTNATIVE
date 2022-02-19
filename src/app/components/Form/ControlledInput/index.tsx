import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import Input from "../Input";
import { ControlledInputContainer } from "./styles";

export interface ErrorSchema {
  message: string;
}

interface GenericErrosObject {
  [key: string]: ErrorSchema
}

interface ControlledInputProps {
  control: Control;
  name: string;
  defaultValue?: string;
  inputLabel: string;
  errors: GenericErrosObject;
  inputProps?: TextInputProps;
}

export default function ControlledInput({ 
  control, 
  inputLabel, 
  name, 
  errors,
  inputProps,
  defaultValue }: ControlledInputProps): JSX.Element {
  return (
    <ControlledInputContainer>
      <Controller 
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            label={inputLabel}
            error={errors[name]}
            {...inputProps}
          />
        )}
      />
    </ControlledInputContainer>
  )
}