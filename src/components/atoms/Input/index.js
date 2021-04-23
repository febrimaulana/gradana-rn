import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, hp} from '../../../constants';
import Heading from '../Heading';

const Input = ({
  title,
  multiline,
  leftComponent,
  rightComponent,
  placeholder,
  onChangeText,
  paddingVertical,
  paddingHorizontal,
  value,
  onPress,
}) => {
  if (onPress) {
    return (
      <>
        {title && <Text style={styles.title}>{title}</Text>}
        <TouchableOpacity style={styles.container2} onPress={onPress}>
          {leftComponent && leftComponent}
          <Heading title={placeholder} color={colors.text.black} />
          {rightComponent && rightComponent}
        </TouchableOpacity>
      </>
    );
  }

  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.container}>
        {leftComponent && leftComponent}
        <TextInput
          value={value}
          style={styles.input(paddingVertical, paddingHorizontal)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          allowFontScaling={false}
          multiline={multiline}
          placeholderTextColor="grey"
        />
        {rightComponent && rightComponent}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.bg.gray,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  container2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.bg.gray,
    alignItems: 'center',
    padding: hp(1.5),
  },
  input: (paddingVertical, paddingHorizontal) => ({
    flex: 1,
    color: 'black',
    paddingVertical: paddingVertical || 8,
    paddingHorizontal: paddingHorizontal || 5,
  }),
  title: {
    paddingBottom: 5,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});
