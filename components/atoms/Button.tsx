import { StyledText, StyledTouchableOpacity } from "@/components/styled";
import React from "react";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <StyledTouchableOpacity
      backgroundColor="primary"
      minHeight="40px"
      justifyContent="center"
      px="24px"
      borderRadius="l"
      onPress={onPress}
    >
      <StyledText fontFamily="bold">{label}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
