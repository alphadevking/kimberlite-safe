import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/Button";

export const Home = () => {
  return (
    <>
      <Box m={50}>
        <Text fontSize={25} ml={2}>
          Bringing
        </Text>

        <Heading fontSize={100} marginTop={-8} marginBottom={-5}>
          DeFi
        </Heading>

        <Text fontSize={25} ml={2}>
          Infrastructure to DogeChain
        </Text>

        <HStack pb={10} mt={5}>

          <Link to='explore/featured'>
            <ButtonComp title='Explore Locks'></ButtonComp>
          </Link>
          <Link to='explore/new'>
            <ButtonComp title='New Locks'></ButtonComp>
          </Link>

        </HStack>
      </Box>
    </>
  );
}
