/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Error from '../components/Error';
import {getUpcomingMovies} from '../services/request';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setmovieImages] = useState([]);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    getUpcomingMovies()
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
        setErrorStatus(err.message);
      });
  }, []);

  return (
    <>
      {!errorStatus && (
        <View style={styles.container}>
          <SliderBox
            images={movieImages}
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={dimensions.height / 1.5}
            dotStyle={styles.dotStyle}
          />
          <Text style={styles.title}>Hello, there!</Text>
        </View>
      )}
      {errorStatus && <Error errorMessage={errorStatus} />}
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
  dotStyle: {
    height: 0,
  },
});

export default Home;
