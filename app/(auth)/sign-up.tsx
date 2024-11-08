import { Button, MovieExpoLogo, TextInput } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, signUp } = useSignUp();

  const onPressContinue = async () => {
    if (!name || !email) {
      Toast.show(t("enter-name-email"));
      return;
    }

    if (!isLoaded) {
      Toast.show(t("something-went-wrong"));
      return;
    }

    try {
      setIsLoading(true);
      await signUp.create({
        emailAddress: email,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      router.push({
        pathname: "/(auth)/otp",
        params: { name: name },
      });
    } catch (err) {
      Toast.show(t("something-went-wrong"));
      console.log("Error", JSON.stringify(err));
    } finally {
      setIsLoading(false);
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
        <Button
          isLoading={isLoading}
          label={t("continue")}
          onPress={onPressContinue}
        />
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
