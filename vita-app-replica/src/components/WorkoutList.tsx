import { Workout } from "@/src/api/types";
import { Text, View } from "react-native";

type WorkoutListProps = {
  workoutList?: Workout[];
};

const PALETTE = [
  "#FF6B4A", // coral
  "#6C5CE7", // indigo
  "#00B37A", // green
  "#FF3D71", // pink
  "#3A7BFF", // blue
  "#F5A623", // amber
  "#8B5CF6", // purple
  "#E63946", // red
  "#00C2A8", // teal
];

const colorForKey = (key: string) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length];
};

export default function WorkoutCard({ workoutList }: WorkoutListProps) {
  return (
    <View className="px-4 pt-2 pb-8 gap-3">
      <Text className="text-white/90 text-[26px] font-extrabold tracking-tight leading-[30px] mt-3 capitalize text-center">
        Workout List
      </Text>
      {workoutList?.map((workout) => (
        <View
          key={workout.name}
          className="rounded-[32px] p-6"
          style={{
            backgroundColor: colorForKey(workout.muscle ?? workout.name),
          }}
        >
          <Text className="text-white/70 text-xs font-bold uppercase tracking-widest">
            {workout.muscle}
          </Text>
          <Text className="text-white text-[26px] font-extrabold tracking-tight leading-[30px] mt-3 capitalize">
            {workout.name}
          </Text>
          <Text className="text-white/60 text-sm font-semibold uppercase tracking-wide mt-4">
            {workout.difficulty}
          </Text>
        </View>
      ))}
    </View>
  );
}
