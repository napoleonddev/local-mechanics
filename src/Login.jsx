import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";

const Login = ({handleSubmit, email, password, setEmail, setPassword}) => {
  

  return (
    <Flex px={20} py={4} bg="primary" minH="100vh" w={"100vw"} justify={'center'} gap='30px'>
      <Flex direction={'column'} flex={1} justify={'center'} align={'center'}>
        <Heading fontSize={'5rem'}>WELCOME,</Heading>
        <Heading fontSize={'2.2rem'}>We are at your services</Heading>
      </Flex>
      <Flex direction={'column'} flex={1} justify={'center'} w={'100%'}>
        <Heading mb={4}>Sign in</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            border={"1px solid #000"}
            bgColor={'#fff'}
            h='50px'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            border={"1px solid #000"}
            mt="15px"
            bgColor={'#fff'}
            h='50px'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            type="submit"
            bg={"tertiary"}
            mt={4}
            w="100%"
            color="#fff"
            h='50px'
            _hover={{ bg: "tertiary", color: "#fff" }}
          >
            Login
          </Button>
        </form>
        <Text textAlign={"right"} color={'purple'} cursor={'pointer'}>Forgot password?</Text>
        <Text>Sponsored by local mechanics</Text>
      </Flex>
    </Flex>
  );
};

export default Login;
