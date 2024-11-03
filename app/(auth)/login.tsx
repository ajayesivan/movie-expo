import { Button, MovieExpoLogo, TextInput } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmailCodeFactor, SignInFirstFactor } from "@clerk/types";
import Toast from "react-native-root-toast";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn } = useSignIn();

  const onPressContinue = async () => {
    if (!email) {
      Toast.show(t("enter-email"));
      return;
    }

    if (!isLoaded) {
      Toast.show(t("something-went-wrong"));
      return;
    }

    try {
      setIsLoading(true);
      const { supportedFirstFactors } = await signIn.create({
        identifier: email,
      });

      const isEmailCodeFactor = (
        factor: SignInFirstFactor
      ): factor is EmailCodeFactor => {
        return factor.strategy === "email_code";
      };

      const emailCodeFactor = supportedFirstFactors?.find(isEmailCodeFactor);

      if (emailCodeFactor) {
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: emailCodeFactor.emailAddressId,
        });
        router.push("/(auth)/otp");
      }
    } catch (err: any) {
      Toast.show(t("something-went-wrong"));
      console.log("Error", JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const onPressCreateAnAccount = () => {
    router.replace("/(auth)/sign-up");
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
          label={t("create-an-account")}
          onPress={onPressCreateAnAccount}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Login;
