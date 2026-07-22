import axios, { AxiosInstance } from "axios";
import { Workout } from "./types";

const api: AxiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_EXERCISES_URL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": `${process.env.EXPO_PUBLIC_NINJA_API}`,
  },
});

export async function getExercises(): Promise<Workout[] | undefined> {
  try {
    const res = await api.get<Workout[]>("/");
    return res.data;
  } catch (error) {
    console.error("Error fetching meals: ", error);
    return undefined;
  }
}

export async function getExercisesByMuscle(
  muscle: string,
): Promise<Workout[] | undefined> {
  try {
    const res = await api.get<Workout[]>(`?muscle=${muscle}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching meals: ", error);
    return undefined;
  }
}

export async function getExercisesByDifficulty(
  difficulty: string,
): Promise<Workout[] | undefined> {
  try {
    const res = await api.get<Workout[]>(`?difficulty=${difficulty}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching meals: ", error);
    return undefined;
  }
}
