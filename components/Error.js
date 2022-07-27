/* eslint-disable */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error = (props) => {
  const {errorMessage} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Error;
