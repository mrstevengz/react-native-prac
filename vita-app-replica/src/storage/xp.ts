import AsyncStorage from "@react-native-async-storage/async-storage";

const XP_KEY = "xp";
const LVL_KEY = "lvl";

export async function getXp(): Promise<number> {
  const number = await AsyncStorage.getItem(XP_KEY);
  return number ? Number(number) : 0;
}

export async function persistXp(value: number): Promise<void> {
  await AsyncStorage.setItem(XP_KEY, String(value));
}

export async function resetXp(): Promise<void> {
  await AsyncStorage.removeItem(XP_KEY);
}

export async function getLvl(): Promise<number> {
  const lvl = await AsyncStorage.getItem(LVL_KEY);
  return lvl ? Number(lvl) : 1;
}

export async function persistLvl(value: number): Promise<void> {
  await AsyncStorage.setItem(LVL_KEY, String(value));
}
