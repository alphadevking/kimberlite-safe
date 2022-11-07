import { Box, Stack, Heading, Flex, Center } from '@chakra-ui/react';

const style = {
    border: '2px solid #ff433a',
    borderRadius: '20px',
    fontSize: '15px',
}

export const LockDetail = () => {

    return (
        <>
            <Box p={25} ml={25} mr={25}>

                <Center>
                    <Heading>Lock Information</Heading>
                </Center>

                <Center>
                    <Stack gap={5} mt={5} p={8} {...style}>

                        <Box display={'flex'}>Lock Name: &nbsp; {"Test Lock"}</Box>

                        <Box display={'flex'}>Lock Description: &nbsp; {"This is just a new test"}</Box>

                        <Box display={'flex'}>Owner Address: &nbsp; {"0x49c7453b0878ecE4c1D9dF10900C466039474A9f"}</Box>

                        <Box display={'flex'}>Withdrawal Date: &nbsp;{"Dec 25, 2022"}</Box>

                        <Box display={'flex'}>Token Address: &nbsp; {"0xcd6d6a8b790e445aa27a4aa3178dcb0db15b5058"}</Box>

                        <Box display={'flex'}>Amount: &nbsp; {"378.5"}</Box>
                        
                    </Stack>
                </Center>

            </Box>
        </>
  )
  
};
