import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {Splash, Home, Soal1, Soal2, Soal3} from '../../pages';
const Stack = createStackNavigator();

const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soal1"
        component={Soal1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soal2"
        component={Soal2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soal3"
        component={Soal3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routing;
