import { StyledText } from "@/components/styled";
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
      <StyledText fontSize={24} fontFamily={"boldItalic"}>
        Heading 1
      </StyledText>
      <StyledText fontSize={22} fontFamily={"bold"}>
        Heading 2
      </StyledText>
    </View>
  );
}
