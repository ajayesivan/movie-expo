import { IconButton } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import { router } from "expo-router";
import { Stack } from "expo-router";

const Favorites = () => {
  return (
    <StyledView>
      <Stack.Screen
        options={{
          title: "Favorites",
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
