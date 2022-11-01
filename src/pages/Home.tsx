import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button/Button";

export const Home = () => {
  return (
    <>
      <Box m={50}>
        <Text fontSize={"40"} ml={2}>
          Bringing
        </Text>

        <Heading fontSize={"150"} marginTop={-8} marginBottom={-5}>
          DeFi
        </Heading>

        <Text fontSize={"40"} ml={2}>
          Infrastructure to DogeChain
        </Text>

        <HStack pb={10} mt={5}>

          <Link to='explore/featured'>
            <ButtonComp title='Explore Locks' color="white"></ButtonComp>
          </Link>
          <Link to='explore/new'>
            <ButtonComp title='New Locks' color="white"></ButtonComp>
          </Link>

        </HStack>
      </Box>
    </>
  );
}
