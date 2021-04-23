import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routing} from './config';
import {colors} from './constants';
import Toast from 'react-native-toast-message';

const MainApp = () => {
  LogBox.ignoreLogs([
    'Setting a timer',
    "Can't perform a",
    'VirtualizedLists should never be nested',
  ]);

  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar
            backgroundColor={colors.bg.white}
            barStyle="dark-content"
          />
          <Routing />
        </SafeAreaView>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
