import { Workout } from "@/src/api/types";
import { getExercises } from "@/src/api/workouts";
import WorkoutCard from "@/src/components/WorkoutList";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

const WorkoutScreen = () => {
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getExercises();
        setWorkoutList(data || []);
      } catch (error) {
        console.log("Failed to load exercises");
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <ScrollView className="bg-zinc-100 dark:bg-black">
      <WorkoutCard workoutList={workoutList} />
    </ScrollView>
  );
};
export default WorkoutScreen;
