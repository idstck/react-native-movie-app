/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Carousel from '../components/Carousel';
import Error from '../components/Error';
import {getPopularMovies, getUpcomingMovies} from '../services/request';

const dimensions = Dimensions.get('screen');

const Home = (props) => {
  const {navigation} = props;
  const [movieImages, setmovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [errorStatus, setErrorStatus] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const getMovieData = () => {
    return Promise.all([getUpcomingMovies(), getPopularMovies()]);
  };

  useEffect(() => {
    getMovieData()
      .then(([upcomingMovies, popularMovies]) => {
        let images = [];
        for (let movie = 0; movie < upcomingMovies.length; movie++) {
          images.push(
            `https://image.tmdb.org/t/p/w500${upcomingMovies[movie]['poster_path']}`,
          );
        }
        setmovieImages(images);
        setPopularMovies(popularMovies);
      })
      .catch((err) => {
        setErrorStatus(err.message);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {!errorStatus && loaded && (
        <ScrollView>
          <SliderBox
            images={movieImages}
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={dimensions.height / 1.5}
            dotStyle={styles.dotStyle}
          />
          <Carousel
            navigation={navigation}
            title={'Popular Movies'}
            content={popularMovies}
          />
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator
          size={'large'}
          style={styles.container}
          color={'#999999'}
        />
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
