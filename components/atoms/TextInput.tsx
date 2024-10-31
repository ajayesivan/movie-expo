import { StyledTextInput } from "@/components/styled";

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
}

const TextInput = ({ placeholder, onChangeText, value }: TextInputProps) => {
  return (
    <StyledTextInput
      placeholder={placeholder}
      backgroundColor="bgHighlight"
      px="14px"
      py="10px"
      borderWidth="1px"
      borderColor="placeholder"
      borderRadius="l"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
