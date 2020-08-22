import React from 'react';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';
import Page from './Page';

const customTheme = {
  ...theme,
};

export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Page />
    </ThemeProvider>
  );
}
