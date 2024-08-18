import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = () => {

  const toast = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    review: "",
  });
  const [loading, setLoading] = useState(false)

  const formChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const submitData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      review: "",
    });
    setTimeout(() => {
      setLoading(true);
      toast({
        title: 'Review Sent.',
        description: "Thank you for your reviews. We will act on this!",
        status: 'success',
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
    }, 1000);
    setInterval(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <Box bg="primary" minH="100vh" w={"100vw"}>
      <Flex justifyContent={"space-between"} bg={"quaternary"} p={5}>
        <Heading textAlign="center" color="primary" fontSize={"35px"}>
          Local Mechanics
        </Heading>
        <Link href="/contact-us">
          <Button>Contact Us</Button>
        </Link>
      </Flex>

      <Box>
        <Text my="10px" fontSize={"2rem"} fontWeight={"bold"}>
          Leave us a review
        </Text>
        <FormControl maxW={"400px"} mx={"auto"}>
          <Box>
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              name="firstName"
              bgColor={"#fff"}
              border={"1px solid #000"}
              w="100%"
              onChange={formChange}
              value={formData.firstName}
            />
          </Box>
          <Box mt="10px">
            <FormLabel>Last name</FormLabel>
            <Input
              type="text"
              name="lastName"
              bgColor={"#fff"}
              border={"1px solid #000"}
              w="100%"
              onChange={formChange}
              value={formData.lastName}
            />
          </Box>
          <Box mt="10px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              bgColor={"#fff"}
              border={"1px solid #000"}
              w="100%"
              onChange={formChange}
              value={formData.email}
            />
          </Box>
          <Box mt="10px">
            <FormLabel>Your review</FormLabel>
            <Textarea
              name="review"
              bgColor={"#fff"}
              border={"1px solid #000"}
              w="100%"
              onChange={formChange}
              value={formData.review}
            />
          </Box>
          <Button
            bg="quaternary"
            type="submit"
            my={"15px"}
            w="full"
            color={"primary"}
            onClick={submitData}
            isLoading={loading}
            _hover={{ bg: "quaternary", color: "primary" }}
          >
            Send
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
