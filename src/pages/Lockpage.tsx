import { Box, Container, Text } from "@chakra-ui/react";
import { Search } from "../components/Search";
import { Link, Outlet } from "react-router-dom";
import { styles } from '../global/view';
import ButtonComp from "../components/Button/Button";

export const Lockpage = () => {

  return (
    <Box ml={25}>
      <Box m={2} pt={9}>
        <Text pb={5} fontSize={"20px"}>
          Explore Locks
        </Text>
        <Search />
      </Box>
      <Box pt={5} className='tabs'>
        <Link
          to='/explore/featured'
          style={styles}
          className='tab tab-bordered tab-active'
        >
          Featured Locks
        </Link>
        <Link to='/explore/new' className='tab tab-bordered'>
          My Locks
        </Link>
      </Box>
      <Link to={"/create/new"}>
        <ButtonComp title="Create New Lock"/>
      </Link>

      <Box p={5}>
        <Outlet />
      </Box>
      <Container>
        Disclaimer: The information provided shall not in any way constitute a
        recommendation as to whether you should invest in any product discussed.
        We accept no liability for any loss occasioned to any person acting or
        refraining from action as a result of any material provided or
        published.
      </Container>
    </Box>
  );
};
