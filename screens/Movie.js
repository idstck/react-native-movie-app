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
import StarRating from 'react-native-star-rating';
import Error from '../components/Error';
import {getMovieDetail} from '../services/request';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';

const placeholderMovie = require('../assets/images/placeholder.png');
const dimensions = Dimensions.get('screen');

const Movie = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});
  const [errorStatus, setErrorStatus] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const trailerShown = () => {
    navigation.navigate('Trailer');
  };

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
            <View style={styles.playButton} opacity={0.5}>
              <PlayButton handlePress={trailerShown} />
            </View>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <View style={styles.genreContainer}>
              {movie.genres.map((genre, index) => (
                <Text key={index} style={styles.genreTitle}>
                  {genre.name}
                </Text>
              ))}
            </View>
            <View style={styles.starsContainer}>
              <StarRating
                starSize={35}
                fullStarColor={'gold'}
                halfStarColor={'gold'}
                disabled={false}
                maxStars={5}
                rating={movie.vote_average / 2}
              />
            </View>
            <Text style={styles.releaseDate}>
              {'Relase date: ' +
                dateFormat(movie.release_date, 'dddd, d mmmm yyyy')}
            </Text>
            <Text style={styles.overview}>{movie.overview}</Text>
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
  starsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
  },
  genreTitle: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontWeight: 'bold',
  },
  overview: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  playButton: {
    position: 'absolute',
    top: -70,
    right: 20,
    alignContent: 'center',
  },
});

export default Movie;
