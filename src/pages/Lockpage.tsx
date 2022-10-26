import { Box, Text } from "@chakra-ui/react";
import { Search } from "../components/Input/Search";
import { Link, Outlet } from "react-router-dom";

export const Lockpage = () => {
  return (
    <Box ml={25}>
      <Box m={2} pt={9}>
        <Text pb={5} fontSize={"20px"}>
          Explore Locks
        </Text>
        <Search/>
      </Box>
      <Box pt={5} className='tabs' color='white'>
        <Link to='/explore/featured' className='tab tab-bordered tab-active'>
          Featured
        </Link>
        <Link to='/explore/new' className='tab tab-bordered'>
          New
        </Link>
      </Box>
      <Outlet/>
    </Box>
  );
};
