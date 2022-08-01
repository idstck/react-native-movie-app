/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import Error from '../components/Error';
import {getMovieDetail} from '../services/request';

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
      {!errorStatus && loaded && <Text>{JSON.stringify(movie)}</Text>}
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
});

export default Movie;
