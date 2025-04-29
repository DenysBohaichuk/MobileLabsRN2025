import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameView from './views/GameView';
import GoalsView from './views/GoalsView';

const Stack = createNativeStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Гра" component={GameView} />
        <Stack.Screen name="Завдання" component={GoalsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
