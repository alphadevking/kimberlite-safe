import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonComp from '../components/Button/Button';

export const NotFound = () => {
  return (
    <Box p={20}>
      <Center>
        <Heading fontSize={200}>404</Heading>
        <Heading>Error</Heading>
      </Center>
      <Text textAlign={"center"}>
        <Box>
          Page Not Found, Has Been Removed Or Is Experiencing Some Kind of
          Interruption.
        </Box>
        <Link to={"/"}>
          <ButtonComp title='Back to Homepage' />
        </Link>
      </Text>
    </Box>
  );
};
