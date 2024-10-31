import theme from "@/components/styled/theme";
import { Slot, SplashScreen } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import AuthContext from "@/context/AuthContext";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("@/assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-BoldItalic": require("@/assets/fonts/OpenSans-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={false}>
        <Slot />
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default RootLayout;
