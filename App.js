/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const getPopMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=778306490922af732ee8ce5aeb1ef02e`,
  );
  console.log(JSON.stringify(response.data.results[0], null, 2));
};

const App = () => {
  getPopMovies();
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

export default App;
