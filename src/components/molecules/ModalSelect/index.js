import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Heading, List} from '../../../components';
import {colors, hp} from '../../../constants';
import {Gap} from '../../atoms';

const ModalSelect = ({
  isVisible,
  onPressClose,
  modalTitle,
  list = [],
  onPress,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      useNativeDriver={true}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.conatinerModal}>
        <Heading title={modalTitle} bold fontSize={hp(2.5)} />
        <Gap height={hp(1)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map((item, key) => {
            return (
              <List title={item.nama} key={key} onPress={() => onPress(item)} />
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalSelect;

const styles = StyleSheet.create({
  conatinerModal: {
    backgroundColor: colors.bg.white,
    padding: hp(2),
    borderRadius: hp(1),
    height: hp(80),
  },
});
