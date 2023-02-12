import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props ={
  children: string,
  bang: boolean,
}

export const Hello: React.FC<Props> = (props) => {
  const { children, bang }  = props;
  return (
    <View>
      <Text style= {styles.text}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
