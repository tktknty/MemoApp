import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppBar = () => {
  return (
    <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#6AB6FC',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#fff',
  },
  appbarRight:{
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

