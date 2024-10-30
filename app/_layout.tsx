import theme from "@/components/styled/theme";
import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
