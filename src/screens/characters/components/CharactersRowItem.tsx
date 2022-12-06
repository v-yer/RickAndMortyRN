import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CharacterItem } from '../CharactersScreen';
import { colors } from '../../../assets/colors';

type CharactersListItemProps = {
  character: CharacterItem;
  onPress: () => void;
};

export const CharactersRowItem = ({
  character,
  onPress,
}: CharactersListItemProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image
        source={{ uri: character.image }}
        style={styles.listImage}
        borderRadius={8}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{character.name}</Text>
        <Text style={styles.text}>
          {character.species + ' • ' + character.gender}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  textWrapper: {
    paddingLeft: 8,
    paddingTop: 12,
  },
  text: {
    color: colors.text.itemTitle,
  },
  listImage: {
    width: 110,
    height: 110,
  },
});
