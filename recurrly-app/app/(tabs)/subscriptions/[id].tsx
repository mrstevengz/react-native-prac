import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscripion Details: {id}</Text>
      <Link href="/index"> Go Back</Link>
    </View>
  );
};
export default SubscriptionDetails;
