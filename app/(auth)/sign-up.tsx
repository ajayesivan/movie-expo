import { Button, MovieExpoLogo, TextInput } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { isLoaded, signUp } = useSignUp();

  const onPressContinue = async () => {
    if (!isLoaded) {
      console.log("Not loaded");
      return; // TODO: Update the user about the issue
    }

    try {
      await signUp.create({
        emailAddress: email,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      router.push({
        pathname: "/(auth)/otp",
        params: { name: name },
      });
    } catch (err) {
      console.log("Error", JSON.stringify(err));
    }
  };

  const onPressAlreadyHaveAnAccount = () => {
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView>
      <StyledView gap="28px" px="20px" pt="100px">
        <StyledView alignItems="center" gap="8px">
          <MovieExpoLogo />
          <StyledText fontFamily="italic">{t("tagline")}</StyledText>
        </StyledView>
        <StyledText fontSize="l" fontFamily="bold">
          {t("sign-up")}
        </StyledText>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={t("name")}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={t("email")}
        />
        <Button label={t("continue")} onPress={onPressContinue} />
        <Button
          type="link"
          label={t("already-have-an-account")}
          onPress={onPressAlreadyHaveAnAccount}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Login;
