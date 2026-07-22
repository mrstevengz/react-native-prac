import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Meal, Workout } from "../api/types";

const MEALS_KEY = "meals";
const WORKOUT_KEY = "workouts";

//ASYNC STORAGE REQUESTS

//GET REQUESTS

export async function getMeals(): Promise<Meal[]> {
  const data = await AsyncStorage.getItem(MEALS_KEY);
  return data ? JSON.parse(data) : [];
}

export async function getWorkouts(): Promise<Workout[]> {
  const data = await AsyncStorage.getItem(WORKOUT_KEY);
  return data ? JSON.parse(data) : [];
}

//POST REQUESTS

export async function addMeal(
  meal: Omit<Meal, "id" | "createdAt">,
): Promise<Meal> {
  const meals = await getMeals();

  const newMeal: Meal = {
    ...meal,
    idMeal: Date.now().toString(),
  };

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));
  return newMeal;
}

export async function clearAllMeals(): Promise<void> {
  await AsyncStorage.removeItem(MEALS_KEY);
}
