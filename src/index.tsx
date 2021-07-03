import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import Routes from './routes/index.routes';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const App: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={s.container}
      contentContainerStyle={s.container}
      keyboardVerticalOffset={-200}
    >
      <Routes />
    </KeyboardAvoidingView>
  );
};

export default App;
