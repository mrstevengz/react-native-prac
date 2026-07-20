import { Link } from "expo-router";
import { Text, View } from "react-native";
const SignUp = () => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Link href="/(auth)/sign-in">Sign in</Link>
    </View>
  );
};
export default SignUp;
