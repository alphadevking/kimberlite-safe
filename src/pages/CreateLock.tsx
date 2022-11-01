import { Box, Text, Container, Checkbox } from "@chakra-ui/react";
import ButtonComp from "../components/Button/Button";
import { CustomInput } from "../components/Input/Input";
import { inputTextStyle } from "../global/view";

export const CreateLock = () => {
  return (
    <Box ml={25}>
      <Box m={2} pt={9}>
        <Text pb={5} fontSize={"20px"}>
          Create New Lock
        </Text>
      </Box>

      <Box p={5}>
        <Box m={3}>
          <Text fontSize={"15px"}>Token or LP Token Address*</Text>
          <CustomInput
            type='text'
            style={inputTextStyle}
            placeholder='Enter token or LP token address'
            required
          />
        </Box>

        <Box m={3}>
          <Text fontSize={"15px"}>Lock Name*</Text>
          <CustomInput
            type='text'
            style={inputTextStyle}
            placeholder='Ex. SmartChain Lock'
            required
          />
        </Box>

        <Box m={3}>
          <Text fontSize={"15px"}>Amount*</Text>
          <CustomInput
            type='number'
            style={inputTextStyle}
            placeholder='Ex. 1000'
            required
          />
        </Box>

        <Box m={3}>
          <Text fontSize={"15px"}>Lock until (UTC Time)*</Text>
          <CustomInput
            type='date'
            style={inputTextStyle}
            placeholder='Select date'
            required
          />
        </Box>

        <Box m={3}>
          <Text fontSize={"15px"}>Description</Text>
          <CustomInput
            type='text'
            style={inputTextStyle}
            placeholder='Ex. Periodic Liquidity Provision'
            required
          />
        </Box>

        <Box m={3}>
          <ButtonComp title='Create lock' color='white' />
        </Box>
      </Box>

      <Box textAlign={"center"}>
        <Container p={5}>
          Warning: Tokens with a built-in TX fee aren’t well supported by the
          safe. Please exclude Kimberlite Lab’s safe address 0x...E from fees,
          rewards and max tx amount or send an additional amount of tokens
          equaling the fee that was taken on the Deposit transaction. This
          amount must be sent to the Safe contract address directly.
        </Container>

        <Container p={5}>
          Example You locked: 1000 tokens The TX fee was: 50 tokens Safe
          received: 9950 tokens To withdraw: you send 50 tokens directly to the
          safe so there’s enough tokens to unlock the deposit.
        </Container>

        <Container p={5}>
          If you are a token creator and the token supports feeless address;
          mark the Safe contract address as feeless.
        </Container>
      </Box>
    </Box>
  );
};
