import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { Text, ScrollView } from 'react-native';

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}