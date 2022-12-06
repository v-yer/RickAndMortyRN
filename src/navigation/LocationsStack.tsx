import { largeTitleOptions } from './navigationOptions';
import { LocationsScreen } from '../screens/locations/LocationsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const LocationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Locations'}
        options={largeTitleOptions}
        component={LocationsScreen}
      />
    </Stack.Navigator>
  );
};
