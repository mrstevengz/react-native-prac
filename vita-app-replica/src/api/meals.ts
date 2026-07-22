import axios, { AxiosInstance } from "axios";
import { Meal } from "./types";

const api: AxiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_MEAL_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getRandomMeal(): Promise<Meal | undefined> {
  try {
    const res = await api.get<Meal>("/random.php");
    return res.data;
  } catch (error) {
    console.error("Error fetching the meal: ", error);
    return undefined;
  }
}

export async function getMealById(id: string): Promise<Meal | undefined> {
  try {
    const res = await api.get<Meal>(`/lookup.php?i=${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching the meal: ", error);
    return undefined;
  }
}
