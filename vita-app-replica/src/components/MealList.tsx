import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { MealTimes } from "../app/(tabs)/meals";
import { addXP } from "../hooks/usePlayer";

type MealListProps = {
  meals: MealTimes;
};

type MealCardProps = {
  id: string;
  label: string;
  name?: string;
  xp: number;
  color: string;
  onToggle: (id: string, xp: number, isOpen: boolean) => void;
};

function MealCard({ id, label, name, xp, color, onToggle }: MealCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    onToggle(id, xp, nextState);
  };

  return (
    <Pressable
      onLongPress={handleToggle}
      delayLongPress={350}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.97 : 1 }],
        opacity: isOpen ? 0.55 : 1,
      })}
    >
      <View
        className="rounded-[28px] px-6 py-7 overflow-hidden"
        style={{
          backgroundColor: color,
          shadowColor: color,
          shadowOpacity: isOpen ? 0.15 : 0.4,
          shadowRadius: 24,
          shadowOffset: { width: 0, height: 14 },
          elevation: isOpen ? 3 : 10,
        }}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-white/60 text-[11px] font-bold uppercase tracking-[0.22em]">
            {label}
          </Text>

          <View
            className="rounded-full px-3 py-[6px]"
            style={{
              backgroundColor: isOpen ? "rgba(255,255,255,0.25)" : "#FFD66B",
              shadowColor: "#FFD66B",
              shadowOpacity: isOpen ? 0 : 0.7,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 0 },
              elevation: isOpen ? 0 : 8,
            }}
          >
            <Text
              className="text-[12px] font-extrabold tracking-tight"
              style={{ color: isOpen ? "#FFFFFF" : "#4A3200" }}
            >
              {isOpen ? "✓ DONE" : `+${xp} XP`}
            </Text>
          </View>
        </View>

        <Text className="text-white text-[26px] font-extrabold tracking-tight leading-[30px] mt-4 capitalize">
          {name}
        </Text>
      </View>
    </Pressable>
  );
}

export default function MealList({ meals }: MealListProps) {
  const { breakfastData, lunchData, dinnerData } = meals;
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  //Toggle function for cards
  const handleCardToggle = (id: string, xp: number, isOpen: boolean) => {
    if (xp) {
      isOpen ? addXP(xp) : addXP(-xp);
    }

    setCompletedIds((prev) => {
      const next = new Set(prev);
      isOpen ? next.add(id) : next.delete(id);
      return next;
    });
  };

  const cards = [
    { label: "Breakfast", data: breakfastData, xp: 100, color: "#E8894A" },
    { label: "Lunch", data: lunchData, xp: 100, color: "#2FA37C" },
    { label: "Dinner", data: dinnerData, xp: 50, color: "#5B54C8" },
  ];

  const allCompleted = cards.every((c) =>
    completedIds.has(c.data?.idMeal ?? c.label),
  );

  if (allCompleted) {
    return (
      <View className="px-5 pt-3 pb-10 gap-4">
        <Text className="text-white text-[28px] font-extrabold tracking-tight leading-[32px] mt-3 mb-1 capitalize text-center">
          All cards completed. Try again tomorrow!
        </Text>
      </View>
    );
  }

  return (
    <View className="px-5 pt-3 pb-10 gap-4">
      <Text className="text-white text-[28px] font-extrabold tracking-tight leading-[32px] mt-3 mb-1 capitalize text-center">
        Today's Meals
      </Text>

      {cards.map((c) => (
        <MealCard
          id={c.data?.idMeal ?? c.label}
          key={c.data?.idMeal ?? c.label}
          label={c.label}
          name={c.data?.strMeal}
          xp={c.xp}
          color={c.color}
          onToggle={handleCardToggle}
        />
      ))}
    </View>
  );
}
