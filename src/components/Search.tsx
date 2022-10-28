import { Box, HStack } from "@chakra-ui/react";
import { BiSearch } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { CustomInput } from './Input/Input';
import { inputSearchStyle } from '../global/view';

export const Search = () => {
  return (
    <Box>
      <HStack>
      <CustomInput type='search' style={inputSearchStyle} placeholder='Search by ID....'/>
        <Link to='new'>
          <BiSearch color='#ff433a' />
        </Link>
      </HStack>
    </Box>
  );
};
