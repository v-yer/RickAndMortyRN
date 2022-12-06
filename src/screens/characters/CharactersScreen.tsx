import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { BasicLayout } from '../../ui/BasicLayout';
import { GET_CHARACTERS } from './GET_CHARACTERS';
import { colors } from '../../assets/colors';
import { CharactersList } from './components/CharactersList';
import Ionicons from 'react-native-vector-icons/Ionicons';

//TODO: use generated type from graphql
export type CharacterItem = {
  name: string;
  id: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

export const CharactersScreen = () => {
  const { setOptions } = useNavigation();
  const [isList, setIsList] = useState(true);

  const { error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1,
    },
    // fetchPolicy: 'cache-only',
    // fetchPolicy: "network-only"
  });

  const characters = data?.characters?.results;

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, []),
  );

  useLayoutEffect(() => {
    const iconName = isList ? 'ios-grid-outline' : 'ios-list-outline';
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsList(!isList)}>
          <Ionicons name={iconName} color={colors.text.body} size={28} />
        </TouchableOpacity>
      ),
    });
  }, [setOptions, isList]);

  return (
    <BasicLayout>
      {error || !characters ? (
        <View style={styles.container}>
          <Text style={styles.text}>API ERROR</Text>
          <View style={styles.buttonContainer}>
            <Button
              title={'Refetch'}
              onPress={() => refetch()}
              color={colors.text.body}
            />
          </View>
        </View>
      ) : (
        <CharactersList characters={characters} isList={isList} />
      )}
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.text.body,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: colors.background.segment.selected,
    marginTop: 12,
  },
});
