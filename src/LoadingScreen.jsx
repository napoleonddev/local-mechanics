import React from 'react';
import { Box, Spinner, Image } from '@chakra-ui/react';
import "./App.css";
import logo from "/logo_1.png";

function LoadingScreen() {
  return (
    <Box className="loading-container" w={'100vw'}>
      <Image className="loading-image" src={logo} alt="Loading" />
    </Box>
  );
}

export default LoadingScreen;
