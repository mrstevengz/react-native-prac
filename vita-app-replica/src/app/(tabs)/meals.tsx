import { Meal } from "@/src/api/types";
import MealList from "@/src/components/MealList";
import XPBar from "@/src/components/XPBar";
import { useDailyMeals } from "@/src/hooks/useDailyCatalog";
import { addXP, usePlayer, xpToNextLevel } from "@/src/hooks/usePlayer";
import { ScrollView } from "react-native";

export type MealTimes = {
  breakfastData: Meal | null;
  lunchData: Meal | null;
  dinnerData: Meal | null;
};

const MealsScreen = () => {
  const { data: mealsData } = useDailyMeals();
  const { xp, lvl } = usePlayer();
  const xpToLevel = xpToNextLevel(lvl);

  const defaultMeals: MealTimes = {
    breakfastData: null,
    lunchData: null,
    dinnerData: null,
  };

  function handleXP(amount: number) {
    addXP(amount);
  }

  return (
    <ScrollView className="bg-zinc-100 dark:bg-black">
      <MealList meals={mealsData || defaultMeals} />

      <XPBar xp={xp} lvl={lvl} xpToLevel={xpToLevel} />
    </ScrollView>
  );
};
export default MealsScreen;
