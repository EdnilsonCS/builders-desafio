import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home';
import { PublicRoutesConstants } from './constants.routes';

export type RootPublicParamList = {
  [PublicRoutesConstants.Home]: undefined;
};

const Stack = createStackNavigator<RootPublicParamList>();

const Public: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={PublicRoutesConstants.Home}>
      <Stack.Screen
        name={PublicRoutesConstants.Home}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Public;
