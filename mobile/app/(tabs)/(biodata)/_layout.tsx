import { Stack, router } from 'expo-router';
import React from 'react';

import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button, Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerRight: (() => <Image 
        style={{width: 50,height: 50,}}
        source={require('../../../assets/images/react-logo.png')}/>)
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Get BioData'
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
