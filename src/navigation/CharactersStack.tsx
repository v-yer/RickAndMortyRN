import { CharactersScreen } from '../screens/characters/CharactersScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { largeTitleOptions } from './navigationOptions';

const Stack = createNativeStackNavigator();

export const CharactersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Characters"
        component={CharactersScreen}
        options={largeTitleOptions}
      />
    </Stack.Navigator>
  );
};
