import { Button } from "@/components/atoms";
import { StyledText, StyledView } from "@/components/styled";
import { useClerk } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { signOut } = useClerk();

  const logout = () => {
    signOut();
  };

  return (
    <SafeAreaView>
      <StyledView p="20px">
        <StyledText fontSize="50px">Home</StyledText>
        <Button onPress={logout} label="Logout" />
      </StyledView>
    </SafeAreaView>
  );
};

export default Home;
