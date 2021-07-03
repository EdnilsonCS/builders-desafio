import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import PublicRoutes from './public/index.routes';

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: '#6a2aba' },
};

const Routes: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <PublicRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
