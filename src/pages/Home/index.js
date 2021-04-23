import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Heading} from '../../components';
import {colors, hp, wp} from '../../constants';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={hp(2)} />
      <Heading title="TEST RN GRADANA" fontSize={hp(3)} bold />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={hp(3)} />
        <Button
          title="SOAL NO 1"
          onPress={() => navigation.navigate('Soal1')}
          onLongPress={() => navigation.navigate('Soal1')}
        />
        <Gap height={hp(3)} />
        <Button
          title="SOAL NO 2"
          onPress={() => navigation.navigate('Soal2')}
          onLongPress={() => navigation.navigate('Soal2')}
        />
        <Gap height={hp(3)} />
        <Button
          title="SOAL NO 3"
          onPress={() => navigation.navigate('Soal3')}
          onLongPress={() => navigation.navigate('Soal3')}
        />
        <Gap height={hp(5)} />
        <Heading title="Terima Kasih" fontSize={hp(2)} bold center />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg.white,
    paddingHorizontal: wp(2.5),
  },
});
