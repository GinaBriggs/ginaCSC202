import { Tabs } from 'expo-router';
import React from 'react';

import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(biodata)"
        options={{
          title: 'BioData',
          
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="tooth" size={24} color={focused ? color : "grey"} />
          ),
        }}
      />
    </Tabs>
  );
}
