import { Stack, router } from 'expo-router';
import React from 'react';

import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,

      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Get BioData',
          headerRight: (() => <Button
            onPress={() => router.push("create")}
            title="Create"
            color="white"
          />)
        }}
      />

      <Stack.Screen
        name="create"
        options={{
          title: 'Create BioData'
        }}

      />

      <Stack.Screen
        name="[id]"
        options={{
          title: 'Update BioData'
        }}

      />
    </Stack>
  );
}
