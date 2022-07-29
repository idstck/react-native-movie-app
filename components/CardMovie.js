/* eslint-disable */

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const placeholderMovie = require('../assets/images/placeholder.png');

const CardMovie = (props) => {
  const {movie} = props;
  return (
    <View>
      <TouchableOpacity style={styles.content}>
        <Image
          style={styles.image}
          source={
            movie.poster_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }
              : placeholderMovie
          }
        />
        {!movie.poster_path && (
          <Text style={styles.movieTitle}>{movie.title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieTitle: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});

export default CardMovie;
