import { globalStyles } from "@/styles/global"
import { StyleSheet, Text, View} from "react-native"


export default function HomeHeader() {
    const currDate = new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })

    return (
        <View style= {globalStyles.header}>
            <Text style = {styles.date}>{currDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});