import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, hp} from '../../../constants';

const Button = ({title, onPress, onLongPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.bg.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: hp(2),
    color: colors.bg.black,
    fontWeight: 'bold',
  },
});
