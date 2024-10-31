import {
  Button,
  IconButton,
  MovieExpoLogo,
  TextInput,
} from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  const router = useRouter();

  const onPressLogin = () => {
    router.replace("/");
  };

  const onPressBack = () => {
    router.back();
  };

  return (
    <SafeAreaView>
      <StyledView gap="28px" px="20px" pt="100px">
        <StyledView alignItems="center" gap="8px">
          <MovieExpoLogo />
          <StyledText fontFamily="italic">{t("tagline")}</StyledText>
        </StyledView>
        <StyledView flexDirection="row" alignItems="center" gap="12px">
          <IconButton icon="arrow-left-line" onPress={onPressBack} />
          <StyledText fontSize="l" fontFamily="bold">
            {t("login")}
          </StyledText>
        </StyledView>
        <TextInput placeholder={t("otp")} />
        <Button label={t("login")} onPress={onPressLogin} />
        <Button
          type="link"
          label={t("create-an-account")}
          onPress={() => console.log("Create an account")}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Otp;
