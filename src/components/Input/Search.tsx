import { Box, HStack, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/Fa";
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
          <FaSearch color='#ff433a' />
        </Link>
      </HStack>
    </Box>
  );
};
