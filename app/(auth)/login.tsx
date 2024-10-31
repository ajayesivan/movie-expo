import { Button, MovieExpoLogo, TextInput } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  const onPressContinue = () => {
    router.push("/(auth)/otp");
  };

  return (
    <SafeAreaView>
      <StyledView gap="28px" px="20px" pt="100px">
        <StyledView alignItems="center" gap="8px">
          <MovieExpoLogo />
          <StyledText fontFamily="italic">{t("tagline")}</StyledText>
        </StyledView>
        <StyledText fontSize="l" fontFamily="bold">
          {t("login")}
        </StyledText>
        <TextInput placeholder={t("email")} />
        <Button label={t("continue")} onPress={onPressContinue} />
        <Button
          type="link"
          label={t("create-an-account")}
          onPress={() => console.log("Create an account")}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Login;
