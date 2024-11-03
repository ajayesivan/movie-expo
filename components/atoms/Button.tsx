import { StyledText, StyledTouchableOpacity } from "@/components/styled";
import React, { useEffect } from "react";
import RemixIcon from "react-native-remix-icon";
import { useTheme } from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface ButtonProps {
  label: string;
  onPress: () => void;
  isLoading: boolean;
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

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 2000 }), -1);
  }, [rotation]);

  return (
    <StyledTouchableOpacity
      backgroundColor={isPrimary ? "primary" : null}
      minHeight="44px"
      justifyContent="center"
      px="24px"
      borderRadius="l"
      onPress={onPress}
      alignItems="center"
    >
      {isLoading ? (
        <Animated.View style={animatedStyle}>
          <RemixIcon
            name="ri-loader-3-line"
            color={theme.colors[isPrimary ? "textPrimary" : "primary"]}
          />
        </Animated.View>
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
