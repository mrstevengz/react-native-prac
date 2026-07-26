import WorkoutCard from "@/src/components/WorkoutList";
import { useDailyWorkouts } from "@/src/hooks/useDailyCatalog";
import { ScrollView } from "react-native";

const WorkoutScreen = () => {
  const { data: workouts } = useDailyWorkouts();

  const workoutList = workouts || [];

  return (
    <ScrollView className="bg-zinc-100 dark:bg-black">
      <WorkoutCard workoutList={workoutList} />
    </ScrollView>
  );
};
export default WorkoutScreen;
