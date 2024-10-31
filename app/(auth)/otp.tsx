import {
  Button,
  IconButton,
  MovieExpoLogo,
  TextInput,
} from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { useSignUp } from "@clerk/clerk-expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  const router = useRouter();

  const { name } = useLocalSearchParams<{ name: string }>();

  const { isLoaded, signUp, setActive } = useSignUp();
  const [otp, setOtp] = useState("");

  const onPressLogin = async () => {
    if (!isLoaded) {
      console.log("Not loaded");
      return; // TODO: Update the user about the issue
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
            {t("login")}
          </StyledText>
        </StyledView>
        <TextInput value={otp} onChangeText={setOtp} placeholder={t("otp")} />
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
