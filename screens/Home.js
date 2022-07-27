/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getPopularMovies} from '../services/request';

const Home = () => {
  const [movieImages, setmovieImages] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        let images = [];
        for (let movie = 0; movie < movies.length; movie++) {
          images.push(
            `https://image.tmdb.org/t/p/w500${movies[movie]['poster_path']}`,
          );
        }
        setmovieImages(images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SliderBox images={movieImages} />
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
