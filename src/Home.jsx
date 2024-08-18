import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Heading, Link } from '@chakra-ui/react';
import MechanicCard from './MechanicCard';
import MechanicModal from './MechanicModal';

const mechanics = [
  { id: 1, name: 'John Doe Mechanics', expertise: 'Engine Repair', rating: 4.5 },
  { id: 2, name: 'Jane Smith Mechanics ', expertise: 'Brake Systems', rating: 4.7 },
  { id: 1, name: 'John Doe Mechanics', expertise: 'Engine Repair', rating: 4.5 },
  { id: 2, name: 'Jane Smith Mechanics', expertise: 'Brake Systems', rating: 4.7 },
  { id: 1, name: 'John Doe Mechanics', expertise: 'Engine Repair', rating: 4.5 },
  { id: 2, name: 'Jane Smith Mechanics', expertise: 'Brake Systems', rating: 4.7 },
  // Add more mechanics as needed
];

function Home() {
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  return (
    <Box bg="primary" minH="100vh" w={'100vw'}>
      <Flex justifyContent={'space-between'} bg={"quaternary"} p={5}>
        <Heading textAlign="center" color="primary" fontSize={'35px'}>Local Mechanics</Heading>
          {/* <Button> */}
        <Link href='/contact-us'>
            Contact Uss
        </Link>
            {/* </Button> */}
      </Flex>
      <Box p={5}>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={5}>
          {mechanics.map((mechanic) => (
            <MechanicCard key={mechanic.id} mechanic={mechanic} onClick={() => setSelectedMechanic(mechanic)} />
          ))}
        </Grid>

        {selectedMechanic && (
          <MechanicModal mechanic={selectedMechanic} onClose={() => setSelectedMechanic(null)} />
        )}
      </Box>
    </Box>
  );
}

export default Home;
