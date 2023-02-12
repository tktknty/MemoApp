import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: string,
}

export const CircleButton: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#6AB6FC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    width: 64,
    height: 64,
    borderRadius: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 8,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 44,
    color: '#fff',
  },
});
