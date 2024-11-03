import { StyledText, StyledTouchableOpacity } from "@/components/styled";
import RemixIcon from "react-native-remix-icon";
import { useTheme } from "styled-components/native";

interface ButtonProps {
  label: string;
  onPress: () => void;
  isLoading?: boolean;
  type?: "primary" | "link";
}

const Button = ({
  label,
  onPress,
  type = "primary",
  isLoading,
}: ButtonProps) => {
  const isPrimary = type === "primary";
  const theme = useTheme();

  return (
    <StyledTouchableOpacity
      backgroundColor={isPrimary ? "primary" : null}
      minHeight="44px"
      justifyContent="center"
      px="24px"
      borderRadius="l"
      onPress={onPress}
      disabled={isLoading}
      alignItems="center"
      style={{ opacity: isLoading ? 0.7 : 1 }}
    >
      {isLoading ? (
        <RemixIcon
          name="ri-loader-line"
          color={theme.colors[isPrimary ? "textPrimary" : "primary"]}
        />
      ) : (
        <StyledText
          fontFamily="bold"
          color={isPrimary ? "textPrimary" : "primary"}
        >
          {label}
        </StyledText>
      )}
    </StyledTouchableOpacity>
  );
};

export default Button;
