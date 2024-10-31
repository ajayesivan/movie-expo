import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { useTheme } from "styled-components/native";

const RootLayout = () => {
  const theme = useTheme();

  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.bg },
        headerShown: false,
      }}
    />
  );
};

export default RootLayout;
