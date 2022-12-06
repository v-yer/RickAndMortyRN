import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CharacterItem } from '../CharactersScreen';

type CharactersGridItemProps = {
  character: CharacterItem;
  index: number;
  onPress: () => void;
};

export const CharacterGridItem = ({
  character,
  index,
  onPress,
}: CharactersGridItemProps) => {
  const isLastInRowItem = (index + 1) % 3 !== 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, isLastInRowItem && styles.lastItem]}
    >
      <Image
        source={{ uri: character.image }}
        style={styles.image}
        borderRadius={8}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1 / 3,
  },
  lastItem: {
    marginRight: 10,
  },
  image: {
    flex: 1 / 3,
    aspectRatio: 1,
  },
});
