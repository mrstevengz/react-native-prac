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
    <View className="px-5 pt-3 pb-10 gap-4">
      <Text className="text-white text-[28px] font-extrabold tracking-tight leading-[32px] mt-3 mb-1 capitalize text-center">
        Workout List
      </Text>
      {workoutList?.map((workout) => (
        <View
          key={workout.name}
          className="rounded-[28px] px-6 py-7 overflow-hidden"
          style={{
            backgroundColor: colorForKey(workout.muscle ?? workout.name),
            shadowColor: colorForKey(workout.muscle ?? workout.name),
            shadowOpacity: 0.4,
            shadowRadius: 24,
            shadowOffset: { width: 0, height: 14 },
            elevation: 10,
          }}
        >
          <Text className="text-white/55 text-[11px] font-bold uppercase tracking-[0.22em]">
            {workout.muscle}
          </Text>
          <Text className="text-white text-[30px] font-extrabold tracking-tight leading-[34px] mt-2 capitalize">
            {workout.name}
          </Text>
          <Text className="text-white/50 text-[13px] font-semibold uppercase tracking-[0.16em] mt-5">
            {workout.difficulty}
          </Text>
        </View>
      ))}
    </View>
  );
}
