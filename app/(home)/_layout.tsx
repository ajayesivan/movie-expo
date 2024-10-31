import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { useTheme } from "styled-components/native";

const RootLayout = () => {
  const theme = useTheme();

  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.bg,
        },
        headerStyle: {
          backgroundColor: theme.colors.bg,
        },
        headerTitleStyle: {
          color: theme.colors.textPrimary,
          fontFamily: theme.fonts.boldItalic,
          fontSize: 24,
        },
        headerTitleAlign: "left",
      }}
    />
  );
};

export default RootLayout;
