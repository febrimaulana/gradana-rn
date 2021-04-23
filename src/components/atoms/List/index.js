import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Heading} from '../../../components';
import {colors, hp} from '../../../constants';

const List = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
      <Heading title={title} fontSize={hp(2)} />
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  conatiner: {
    borderBottomWidth: 1,
    paddingVertical: hp(1),
    borderBottomColor: colors.bg.gray,
  },
});
