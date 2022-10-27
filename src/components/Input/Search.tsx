import { Box, HStack, Input } from "@chakra-ui/react";
import { BiSearch } from 'react-icons/bi'
import { Link } from "react-router-dom";

const inputStyles: any = {
  borderRadius: 15,
  borderColor: "#ff433a",
  width: "100",
  marginEnd: "-40px",
};

export const Search = () => {
  return (
    <Box>
      <HStack>
        <Input {...inputStyles} />
        <Link to=''>
          <BiSearch color='#ff433a' />
        </Link>
      </HStack>
    </Box>
  );
};
