import {
  Button,
  IconButton,
  MovieExpoLogo,
  TextInput,
} from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
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
        <TextInput placeholder="Email" />
        <Button label={t("login")} onPress={() => console.log("Continue")} />
        <Button
          type="link"
          label={t("create-an-account")}
          onPress={() => console.log("Create an account")}
        />
      </StyledView>

      <IconButton
        icon="arrow-left-line"
        onPress={() => console.log("Icon Button")}
      />
    </SafeAreaView>
  );
};

export default Login;
