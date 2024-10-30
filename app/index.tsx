import { Text } from "@/components/styled";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text color="red" fontSize={24}>
        Movie EXPO 1
      </Text>
    </View>
  );
}
