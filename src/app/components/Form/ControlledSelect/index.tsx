import { Dispatch, SetStateAction } from "react";
import DropDownPicker, { DropDownPickerProps, ValueType } from "react-native-dropdown-picker";
import { InputLabel } from "../Input/styles";

interface ControlledSelectProps {
  open: boolean;
  value: string;
  label: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<ValueType | null>>;
}

export default function ControlledSelect({ 
  open, 
  setOpen, 
  setValue, 
  value,
  label,
}: ControlledSelectProps) {
  return (
    <>
      <InputLabel>{label}</InputLabel>
        <DropDownPicker
          items={[
            { label: 'BPA', value: 'BPA' },
            { label: 'Antibiótico', value: 'Antibiótico' },
            { label: 'BPF', value: 'BPF' },
          ]}
          itemKey="value"
          placeholder="Escolha um tipo"
          open={open}
          value={value}
          setValue={setValue}
          setOpen={setOpen}
        />
    </>
  )
}