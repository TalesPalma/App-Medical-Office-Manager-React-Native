import { FormControl, Input } from "native-base";

interface InputFromUserProps {
  label: string
  placeholder: string
  type?: "text" | "password"
}


export const InputFromUser = ({ label, placeholder, type = "text" }: InputFromUserProps) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        borderRadius={'lg'}
        placeholder={placeholder}
        size={'lg'}
        width={'100%'}
        type={type} >
      </Input>
    </FormControl>
  );
}
