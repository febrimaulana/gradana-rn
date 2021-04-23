import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import {Gap, Heading} from '../../atoms';

const CardContact = ({image, title, desc}) => {
  return (
    <View style={styles.conatiner}>
      <Image source={image} style={styles.image} />
      <Gap width={wp(2)} />
      <View>
        <Heading bold title={title} fontSize={hp(2)} />
        <Heading title={desc} fontSize={hp(1.8)} />
      </View>
    </View>
  );
};

export default CardContact;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.bg.blue,
    padding: hp(2),
    borderRadius: hp(1),
    alignItems: 'center',
  },
  image: {
    width: hp(12),
    height: hp(12),
    borderRadius: hp(12) / 2,
  },
});
