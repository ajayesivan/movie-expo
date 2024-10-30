import { StyledText, StyledTouchableOpacity } from "@/components/styled";
import React from "react";

interface ButtonProps {
  label: string;
  onPress: () => void;
  type?: "primary" | "link";
}

const Button = ({ label, onPress, type = "primary" }: ButtonProps) => {
  const isPrimary = type === "primary";

  return (
    <StyledTouchableOpacity
      backgroundColor={isPrimary ? "primary" : null}
      minHeight="40px"
      justifyContent="center"
      px="24px"
      borderRadius="l"
      onPress={onPress}
    >
      <StyledText fontFamily="bold" color={isPrimary ? "text" : "primary"}>
        {label}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
