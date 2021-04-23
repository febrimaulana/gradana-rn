import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = ({title, fontSize, color, numberOfLines = 0, bold, center}) => {
  return (
    <Text
      allowFontScaling={false}
      style={styles.text(fontSize, color, bold, center)}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: (fontSize, color, bold, center) => ({
    fontSize: fontSize || 12,
    color: color || 'black',
    fontWeight: bold ? 'bold' : 'normal',
    textAlign: center ? 'center' : 'left',
  }),
});
