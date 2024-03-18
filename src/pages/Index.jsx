import React, { useState } from "react";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Implement login API call
    toast({
      title: "Login successful.",
      description: "You're now logged in!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // TODO: Implement signup API call
    toast({
      title: "Signup successful.",
      description: "Your account has been created.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Heading>Welcome to Interactive API Service</Heading>
          <Text>Please login or sign up to continue.</Text>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>

          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>

          <Button leftIcon={<FaUserPlus />} colorScheme="gray" onClick={handleSignup}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
