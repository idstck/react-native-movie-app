/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Error from '../components/Error';
import {getMovieDetail} from '../services/request';

const placeholderMovie = require('../assets/images/placeholder.png');
const dimensions = Dimensions.get('screen');

const Movie = ({route}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});
  const [errorStatus, setErrorStatus] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovieDetail(movieId)
      .then((result) => {
        console.log(result);
        setMovie(result);
        setLoaded(true);
      })
      .catch((err) => {
        setErrorStatus(err.message);
      });
  }, [movieId]);

  return (
    <>
      {!errorStatus && loaded && (
        <ScrollView>
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
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <View style={styles.genreContainer}>
              {movie.genres.map((genre, index) => (
                <Text key={index} style={styles.genreTitle}>
                  {genre.name}
                </Text>
              ))}
            </View>
            <Text>{movie.overview}</Text>
          </View>
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
  image: {
    height: dimensions.height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 20,
  },
  genreTitle: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default Movie;
