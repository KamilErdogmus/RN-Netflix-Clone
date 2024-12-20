import React from 'react';
import Router from './src/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import ToastManager from 'toastify-react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ToastManager
          height={60}
          width={200}
          textStyle={{
            fontSize: 12,
            letterSpacing: 0.5,
            lineHeight: 18,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}
          position="bottom"
          duration={3000}
          showCloseIcon={false}
        />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
