/* eslint-disable */

import React, {memo} from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PlayButton = () => {
  return (
    <Pressable>
      <Icon name="play-circle" size={50} color={'white'} />
    </Pressable>
  );
};

export default memo(PlayButton);
