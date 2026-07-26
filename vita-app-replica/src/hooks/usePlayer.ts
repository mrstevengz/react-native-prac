import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../queryClient";
import { getLvl, getXp, persistLvl, persistXp } from "../storage/xp";

export function xpToNextLevel(lvl: number): number {
  return 100 + (lvl - 1) * 20;
}

export function usePlayer() {
  const xp = useQuery({ queryKey: ["xp"], queryFn: getXp, initialData: 0 });
  const lvl = useQuery({ queryKey: ["lvl"], queryFn: getLvl, initialData: 1 });

  return { xp: xp.data, lvl: lvl.data };
}

export function addXP(amount: number) {
  let nextXp = (queryClient.getQueryData<number>(["xp"]) ?? 0) + amount;
  let nextLvl = queryClient.getQueryData<number>(["lvl"]) ?? 1;

  while (nextXp >= xpToNextLevel(nextLvl)) {
    nextXp -= xpToNextLevel(nextLvl);
    nextLvl += 1;
  }

  while (nextXp < 0 && nextLvl > 1) {
    nextLvl -= 1;
    nextXp += xpToNextLevel(nextLvl);
  }

  if (nextXp < 0) {
    nextXp = 0;
  }

  queryClient.setQueryData(["xp"], nextXp);
  queryClient.setQueryData(["lvl"], nextLvl);
  persistXp(nextXp);
  persistLvl(nextLvl);
}
