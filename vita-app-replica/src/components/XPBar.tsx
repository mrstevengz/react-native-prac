import { Text, View } from "react-native";

type XPBarProps = {
  xp: number;
  lvl: number;
  xpToLevel: number;
};

export default function XPBar({ xp, lvl, xpToLevel }: XPBarProps) {
  return (
    <View>
      <Text className="text-white">
        {xp} / {xpToLevel}
      </Text>
      <Text className="text-white">{lvl}</Text>
    </View>
  );
}
