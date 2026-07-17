import { colors } from '@/styles/global';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      {/* Opciones para pantallas */}
      <Stack.Screen name='(tabs)' />
      {/* Name debe matchear el nombre del archivo (como los packetes en Next.JS) */}
    </Stack>
  );
}