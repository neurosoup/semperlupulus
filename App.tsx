import * as React from 'react';
import 'react-native-gesture-handler';
import './i18n.config';
import './amplify.config';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Center, Container, NativeBaseProvider } from 'native-base';

import Brewery from './screens/Brewery';
import AuthSignUp from './screens/AuthSignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="Signup" component={AuthSignUp} options={{ headerShown: false }} />
            <Stack.Screen name="App" component={Brewery} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
