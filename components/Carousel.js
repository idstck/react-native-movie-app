/* eslint-disable */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Carousel = (props) => {
  const {title, content} = props;
  return (
    <View style={styles.carousel}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={content}
          horizontal={true}
          renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;