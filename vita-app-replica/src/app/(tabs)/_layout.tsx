// app/(tabs)/_layout.tsx
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform } from "react-native";

import bookIcon from "@/src/assets/icons/book.png";
import homeIcon from "@/src/assets/icons/home.png";
import personIcon from "@/src/assets/icons/person.png";

const isAndroid = Platform.OS === "android";

const activeTint =
  Platform.OS === "ios"
    ? DynamicColorIOS({ light: "#0F7C7C", dark: "#84D3C4" })
    : "#0F7C7C";

export default function TabsLayout() {
  return (
    <NativeTabs tintColor={activeTint}>
      <NativeTabs.Trigger name="index">
        <Label>Dashboard</Label>
        <Icon sf="book.pages" src={isAndroid ? homeIcon : undefined} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="inventory">
        <Label>Inventory</Label>
        <Icon sf="book" src={isAndroid ? bookIcon : undefined} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="meals">
        <Label>Meals</Label>
        <Icon sf="fork.knife" src={isAndroid ? personIcon : undefined} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="workouts">
        <Label>Workouts</Label>
        <Icon sf="dumbbell" src={isAndroid ? personIcon : undefined} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
