import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  name: string,
}

export const CircleButton: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <View style={styles.circleButton}>
      {/* <Text style={styles.circleButtonLabel}>{children}</Text>
      TODO How can i fix defalut Styles 既存のStyeの上書きをするか */}
      <Feather name={name} size={36} color="white" />
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
