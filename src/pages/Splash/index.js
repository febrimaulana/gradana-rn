import LottieView from 'lottie-react-native';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {LOCovid} from '../../assets';
import {Gap, Heading} from '../../components';
import {colors, hp} from '../../constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Heading title="GRADANA APPS" bold fontSize={hp(3.5)} />
      <Gap height={hp(2)} />
      <LottieView
        source={LOCovid}
        autoPlay
        resizeMode="contain"
        style={styles.losplash}
        speed={1}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  losplash: {
    height: hp(30),
  },
});
