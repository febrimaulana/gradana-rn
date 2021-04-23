import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Button, Gap, Heading} from '../../components';
import {colors, hp, ImageOptions} from '../../constants';

const Soal2 = () => {
  const [foto, setFoto] = useState('');

  const onOpenKamera = () => {
    launchCamera(ImageOptions, response => {
      const imgaeBase64 = `data:${response.type};base64, ${response.base64}`;
      setFoto(imgaeBase64);
    });
  };

  return (
    <View style={styles.page}>
      {!foto ? (
        <Heading title="Belum Foto" bold fontSize={hp(3)} />
      ) : (
        <Image source={{uri: foto}} style={styles.image} />
      )}
      <Gap height={hp(3)} />
      <Button title="open kamera" onPress={onOpenKamera} />
    </View>
  );
};

export default Soal2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: hp(30),
    height: hp(30),
    borderRadius: hp(30) / 2,
  },
});
