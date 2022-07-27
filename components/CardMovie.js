/* eslint-disable */

import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const CardMovie = (props) => {
  const {movie} = props;
  return (
    <View>
      <TouchableOpacity style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default CardMovie;
