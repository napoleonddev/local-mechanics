import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Heading, Link, useToast } from "@chakra-ui/react";
import MechanicCard from "./MechanicCard";
import MechanicModal from "./MechanicModal";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const mechanics = [
  {
    id: 1,
    name: "John Doe Mechanics",
    expertise: "Engine Repair",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith Mechanics ",
    expertise: "Brake Systems",
    rating: 4.7,
  },
  {
    id: 1,
    name: "John Doe Mechanics",
    expertise: "Engine Repair",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith Mechanics",
    expertise: "Brake Systems",
    rating: 4.7,
  },
  {
    id: 1,
    name: "John Doe Mechanics",
    expertise: "Engine Repair",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith Mechanics",
    expertise: "Brake Systems",
    rating: 4.7,
  },
  // Add more mechanics as needed
];

function App() {
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  console.log("auth", auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("email:", email);
    console.log("Password:", password);
    
    if (email === "anjola@gmail.com") {
      setAuth(true);
      navigate('/')
    } else {
      toast({
        title: 'Unable to log in',
        description: "Your username/password is incorrect. Please try again later!",
        status: 'error',
        position: "top-right",
        duration: 9000,
        isClosable: true,
      })
    }
  };


  return !auth ? (
    <Login
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  ) : (
    <Box bg="primary" minH="100vh" w={"100vw"}>
      <Flex justifyContent={"space-between"} bg={"quaternary"} p={5}>
        <Heading
          textAlign="center"
          color="primary"
          cursor={"pointer"}
          fontSize={"35px"}
          onClick={() => navigate("/")}
        >
          Local Mechanics
        </Heading>
        <Flex gap={'20px'}>
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
            <Button onClick={() => {
              setAuth(false);
              navigate('/');
              // window.location.reload();
            }}>Sign out</Button>
        </Flex>
      </Flex>
      <Box p={5}>
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={6}
          mt={5}
        >
          {mechanics.map((mechanic) => (
            <MechanicCard
              key={mechanic.id}
              mechanic={mechanic}
              onClick={() => setSelectedMechanic(mechanic)}
            />
          ))}
        </Grid>

        {selectedMechanic && (
          <MechanicModal
            mechanic={selectedMechanic}
            onClose={() => setSelectedMechanic(null)}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
