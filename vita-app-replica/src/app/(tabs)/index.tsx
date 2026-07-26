import { useDailyMeals, useDailyWorkouts } from "@/src/hooks/useDailyCatalog";
import { useRouter } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
const IndexScreen = () => {
  const router = useRouter();

  const {
    data: meals,
    isLoading: mealsLoading,
    error: mealsError,
  } = useDailyMeals();
  const {
    data: workouts,
    isLoading: workoutsLoading,
    error: workoutsError,
  } = useDailyWorkouts();

  if (mealsLoading || workoutsLoading) {
    return (
      <View className="flex flex-1 justify-center align-middle text-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Text>dashboard</Text>
    </View>
  );
};
export default IndexScreen;
