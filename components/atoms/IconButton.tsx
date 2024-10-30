import { StyledTouchableOpacity } from "@/components/styled";
import Icon from "react-native-remix-icon";
import { useTheme } from "styled-components/native";

interface IconButtonProps {
  icon: string;
  iconColor?: "light" | "dark";
  isNaked?: boolean;
  onPress: () => void;
}

const IconButton = ({ icon, iconColor, isNaked, onPress }: IconButtonProps) => {
  const theme = useTheme();

  return (
    <StyledTouchableOpacity
      backgroundColor={isNaked ? null : "bgHighlight"}
      width="40px"
      height="40px"
      borderRadius="l"
      alignItems="center"
      justifyContent="center"
      onPress={onPress}
    >
      <Icon
        name={icon}
        size={20}
        color={iconColor || theme.colors.textPrimary}
      />
    </StyledTouchableOpacity>
  );
};

export default IconButton;
