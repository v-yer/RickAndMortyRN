import { FlatList, View } from 'react-native';
import { CharactersRowItem } from './CharactersRowItem';
import { CharacterItem } from '../CharactersScreen';
import { CharacterGridItem } from './CharacterGridItem';

export type CharactersProps = {
  characters: CharacterItem[];
  isList: boolean;
};

export const CharactersList = ({ characters, isList }: CharactersProps) => {
  const onItemPress = (message: string) => console.log(message);

  const renderItem = ({
    item,
    index,
  }: {
    item: CharacterItem;
    index: number;
  }) =>
    isList ? (
      <CharactersRowItem
        character={item}
        onPress={() => onItemPress(item.name)}
      />
    ) : (
      <CharacterGridItem
        character={item}
        index={index}
        onPress={() => onItemPress(item.name)}
      />
    );

  const numOfColumns = isList ? 1 : 3;

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={characters}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numOfColumns}
      key={numOfColumns}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 12 }} />}
      //TODO: add onEndReached and fetchMore()
    />
  );
};
