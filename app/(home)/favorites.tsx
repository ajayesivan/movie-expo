import { IconButton } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import t from "@/localization";
import { router } from "expo-router";
import { Stack } from "expo-router";

const Favorites = () => {
  return (
    <StyledView>
      <Stack.Screen
        options={{
          title: t("favorites"),
          headerRight: () => (
            <IconButton
              iconColor="primary"
              icon="ri-home-fill"
              onPress={router.back}
            />
          ),
        }}
      />
      <StyledText>Favorites</StyledText>
    </StyledView>
  );
};

export default Favorites;
