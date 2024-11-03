import {
  Button,
  IconButton,
  MovieExpoLogo,
  TextInput,
} from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  const router = useRouter();

  const { name } = useLocalSearchParams<{ name: string }>();
  const isLogin = !name;

  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    isLoaded: isSignInLoaded,
    signIn,
    setActive: setSignInActive,
  } = useSignIn();
  const [otp, setOtp] = useState("");

  const onPressSignUp = async () => {
    if (!isLoaded) {
      Toast.show(t("something-went-wrong"));
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: otp,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      Toast.show(t("something-went-wrong"));
      console.log("Error", JSON.stringify(err));
    }
  };

  const onPressLogin = async () => {
    if (!isSignInLoaded) {
      Toast.show(t("something-went-wrong"));
      return;
    }

    try {
      const completeSignIn = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code: otp,
      });

      if (completeSignIn.status === "complete") {
        await setSignInActive({ session: completeSignIn.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignIn, null, 2));
      }
    } catch (err) {
      Toast.show(t("something-went-wrong"));
      console.log("Error", JSON.stringify(err));
    }
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
            {t(isLogin ? "login" : "sign-up")}
          </StyledText>
        </StyledView>
        <TextInput value={otp} onChangeText={setOtp} placeholder={t("otp")} />
        <Button
          label={t(isLogin ? "login" : "sign-up")}
          onPress={isLogin ? onPressLogin : onPressSignUp}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Otp;
