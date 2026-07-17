import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

export default function AddMealsScreen() {
    return (
        <ScrollView style = {globalStyles.container}>
            <Text style = {globalStyles.title}>Add Meal</Text>
        </ScrollView>
    )
}