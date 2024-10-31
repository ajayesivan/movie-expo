import theme from "@/components/styled/theme";
import { Slot, SplashScreen } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("@/assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-BoldItalic": require("@/assets/fonts/OpenSans-BoldItalic.ttf"),
  });

  const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPublishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <ClerkLoaded>
        <ThemeProvider theme={theme}>
          <AuthContext.Provider value={false}>
            <Slot />
          </AuthContext.Provider>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
