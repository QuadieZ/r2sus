import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/prompt";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    heading: `'Prompt', sans-serif`,
    body: `'Prompt', sans-serif`
  },
  colors: {
    brand: {
      primary: '#F1905F',
      secondary: '#F4B27B'
    },
    content: {
      primary: '#2D3142',
      secondary: '#9B9B9B',
      contrast: 'white',
      success: '#1E9002',
      error: '#CE5136',
    },
    bg: {
      light: 'white',
      active: '#FBE0CA'
    },
    border: {
      light: '#E0D7D5'
    }
  }
})

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

