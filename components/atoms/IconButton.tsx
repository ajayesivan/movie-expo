import { StyledTouchableOpacity } from "@/components/styled";
import Icon from "react-native-remix-icon";
import { useTheme } from "styled-components/native";

interface IconButtonProps {
  icon: string;
  iconColor?: string;
  isNaked?: boolean;
  onPress: () => void;
}

const IconButton = ({ icon, iconColor, isNaked, onPress }: IconButtonProps) => {
  const theme = useTheme();

  return (
    <StyledTouchableOpacity
      backgroundColor={isNaked ? null : "bgHighlight"}
      width={isNaked ? "24px" : "40px"}
      height={isNaked ? "24px" : "40px"}
      borderRadius="l"
      alignItems="center"
      justifyContent="center"
      onPress={onPress}
    >
      <Icon
        name={icon}
        size={20}
        color={
          iconColor
            ? theme.colors[iconColor] || iconColor
            : theme.colors.textPrimary
        }
      />
    </StyledTouchableOpacity>
  );
};

export default IconButton;
