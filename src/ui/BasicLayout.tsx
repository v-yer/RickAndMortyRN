import { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../assets/colors';
import { StyleSheet } from 'react-native';

type Props = {
  children: ReactNode;
};

export const BasicLayout = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={[
        colors.background.gradient.top,
        colors.background.gradient.bottom,
      ]}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
});
