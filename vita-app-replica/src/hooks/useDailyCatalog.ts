import { useQuery } from "@tanstack/react-query";
import { getRandomMeal } from "../api/meals";
import { getExercises } from "../api/workouts";

const DAILY_MS = 1000 * 60 * 60 * 24;

//Meals

const fetchDailyMeals = async () => {
  const [breakfastRes, lunchRes, dinnerRes] = await Promise.all([
    getRandomMeal(),
    getRandomMeal(),
    getRandomMeal(),
  ]);

  return {
    breakfastData: breakfastRes?.meals[0] ?? null,
    lunchData: lunchRes?.meals[0] ?? null,
    dinnerData: dinnerRes?.meals[0] ?? null,
  };
};

export function useDailyMeals() {
  return useQuery({
    queryKey: ["dailyMealsdata"],
    queryFn: fetchDailyMeals,

    staleTime: DAILY_MS,
    gcTime: DAILY_MS,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}

//Workout catalog

const fetchDailyWorkouts = async () => {
  const workoutRes = await getExercises();
  if (!workoutRes) throw new Error("Network error");
  return workoutRes;
};

export function useDailyWorkouts() {
  return useQuery({
    queryKey: ["dailyWorkoutsdata"],
    queryFn: fetchDailyWorkouts,

    staleTime: DAILY_MS,
    gcTime: DAILY_MS,

    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
