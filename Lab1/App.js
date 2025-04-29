import React from 'react';
import { View, Text, Image, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import PhotosScreen from './PhotosScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function CustomHeader() {
  return (
    <View
      style={{
        backgroundColor: '#6495ED',
        paddingTop: Platform.OS === 'android' ? 30 : 20,
        paddingBottom: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar barStyle="light-content" />
      <Image
        source={{ uri: 'https://ztu.edu.ua/img/logo/university-colored.png' }}
        style={{ width: 120, height: 35 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 8 }}>
        Четверта версія додатку
      </Text>
    </View>
  );
}

function FooterInfo() {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#6495ED',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 14 }}>
        Іванов Іван Іванович
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              'Головна': 'newspaper-variant-outline',
              'Фотогалерея': 'image-multiple-outline',
              'Профіль': 'account-outline',
            };
            return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0a9396',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: '8%',
            backgroundColor: '#e0fbfc',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
        })}
      >
        <Tab.Screen name="Головна" component={HomeScreen} />
        <Tab.Screen name="Фотогалерея" component={PhotosScreen} />
        <Tab.Screen name="Профіль" component={ProfileScreen} />
      </Tab.Navigator>
      <FooterInfo />
    </NavigationContainer>
  );
}
