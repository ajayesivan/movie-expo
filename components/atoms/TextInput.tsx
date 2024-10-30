import { StyledTextInput } from "@/components/styled";

interface TextInputProps {
  placeholder?: string;
  onChangeText?: () => void;
}

const TextInput = ({ placeholder, onChangeText }: TextInputProps) => {
  return (
    <StyledTextInput
      placeholder={placeholder}
      backgroundColor="bgHighlight"
      px="14px"
      py="10px"
      borderWidth="1px"
      borderColor="placeholder"
      borderRadius="l"
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
