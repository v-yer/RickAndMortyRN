import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../assets/colors';
import { CharactersStack } from './CharactersStack';
import { EpisodesStack } from './EpisodesStack';
import { LocationsStack } from './LocationsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.background.basic,
            borderTopColor: 'transparent',
          },
          headerShown: false,
          tabBarActiveTintColor: colors.tint.tabBar.selected,
          tabBarInactiveTintColor: colors.tint.tabBar.unselected,
        }}
      >
        <Tab.Screen
          name="CharactersStack"
          component={CharactersStack}
          options={{
            title: 'Characters',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'ios-people-outline'} size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="EpisodesStack"
          component={EpisodesStack}
          options={{
            title: 'Episodes',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'ios-film-outline'} size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="LocationsStack"
          component={LocationsStack}
          options={{
            title: 'Locations',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'ios-earth-outline'} size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
