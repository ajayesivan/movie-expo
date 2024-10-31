import AuthContext from "@/context/AuthContext";
import { Redirect, Slot, Stack } from "expo-router";
import { useContext } from "react";
import { useTheme } from "styled-components/native";

const RootLayout = () => {
  const theme = useTheme();

  const isAuthenticated = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect href="/" />;
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
