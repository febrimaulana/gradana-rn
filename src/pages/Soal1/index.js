import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardContact, Gap, Heading} from '../../components';
import {colors, hp, wp} from '../../constants';
import {getUser} from '../../redux';

const Soal1 = () => {
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);
  const [user, setUser] = useState([]);

  useEffect(() => {
    dispatch(getUser()).then(result => {
      setUser(result.data);
    });
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(getUser()).then(result => {
      setUser(result.data);
    });
  };

  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Heading bold title="Phone Contacts" fontSize={hp(3.5)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={stateGlobal.refresh}
            onRefresh={onRefresh}
          />
        }>
        {user.map(item => {
          return (
            <View key={item.id}>
              <Gap height={hp(3)} />
              <CardContact
                image={{uri: item.picture}}
                title={`${item.firstName} ${item.lastName}`}
                desc={item.email}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Soal1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg.white,
    paddingHorizontal: wp(2),
  },
});
