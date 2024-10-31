import { Redirect, Stack } from "expo-router";
import { useContext } from "react";
import { useTheme } from "styled-components/native";

const RootLayout = () => {
  const theme = useTheme();

  if (true) {
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
