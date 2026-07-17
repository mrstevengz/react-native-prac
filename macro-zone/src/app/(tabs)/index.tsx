import { Text, ScrollView, StyleSheet, Platform } from "react-native";
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import { Link } from "expo-router";
import MacroGrid from "@/components/MacroGrid";

export default function HomeScreen() {
  return (
   <ScrollView style = {globalStyles.container}>
    <Text style ={globalStyles.title}>MacroZone</Text>
    <HomeHeader/>
    <MacroGrid/>
   </ScrollView>
  )
}

