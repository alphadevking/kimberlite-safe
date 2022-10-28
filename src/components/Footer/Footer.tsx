import { Circle, Container, HStack, Text } from "@chakra-ui/react";
import { BiCopyright } from 'react-icons/bi'

export const Footer = () => {
  return (
    <Container fontSize={12} p={5} centerContent>
      <HStack p={2}>
        <Circle bg='#ff433a' color='white'>
          <BiCopyright size='25px' />
        </Circle>
        <Text>2022 Kimberlite.rocks</Text>
      </HStack>
    </Container>
  );
}
