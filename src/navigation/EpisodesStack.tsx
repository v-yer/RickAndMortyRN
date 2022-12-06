import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { largeTitleOptions } from './navigationOptions';
import { EpisodesScreen } from '../screens/episodes/EpisodesScreen';

const Stack = createNativeStackNavigator();

export const EpisodesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Episodes'}
        options={largeTitleOptions}
        component={EpisodesScreen}
      />
    </Stack.Navigator>
  );
};
