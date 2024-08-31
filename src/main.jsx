import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const App = React.lazy(() => import('./App.jsx'));
const Contact = React.lazy(() => import('./Contact.jsx'));
const Login = React.lazy(() => import('./Login.jsx'));

const theme = extendTheme({
  colors: {
    primary: '#F9DBBA',
    secondary: '#5B99C2',
    tertiary: '#1A4870',
    quaternary: '#1F316F',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* You can add more routes here if needed */}
          </Routes>
        </Suspense>
      </Router>
      
    </ChakraProvider>
  </StrictMode>,
)
