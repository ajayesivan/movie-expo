import theme from "@/components/styled/theme";
import { SplashScreen, Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("@/assets/fonts/OpenSans-Italic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: theme?.colors?.bg },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
