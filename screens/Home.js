/* eslint-disable */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, there!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default Home;
