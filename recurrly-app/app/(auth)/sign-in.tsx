import { Link } from "expo-router";
import { Text, View } from "react-native";
const SignIn = () => {
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Link href="/(auth)/sign-up">Sign Up</Link>
    </View>
  );
};
export default SignIn;
