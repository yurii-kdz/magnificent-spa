import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DeepChild from "./DeepChild";

const theme = {
  background: '#000',
};

function App() {
  return (
      <ThemeProvider theme={theme}>
        <DeepChild />
      </ThemeProvider>

  );
}

export default App;
