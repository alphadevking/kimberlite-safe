import { Circle, Container, HStack, Text } from "@chakra-ui/react";
import { FaCopyright } from 'react-icons/Fa'

export const Footer = () => {
  return (
    <Container fontSize={12} p={5} centerContent>
      <HStack p={2}>
        <Circle bg='white'>
          <FaCopyright size='25px' color='#ff433a' />
        </Circle>
        <Text>2022 Kimberlite Labs</Text>
      </HStack>
    </Container>
  );
};
