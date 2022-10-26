import { Box, Img, Flex, Spacer, HStack } from '@chakra-ui/react';
import casiarLogo from '../../assets/kimberlite.png'
import Button from '../Button/Button';
import ButtonComp from '../Button/Button';


const imagestyle = {
    width: '1.1rem',
    paddingBottom: '4px',
}

const navbarstyle = {
    background: 'transparent',
    // outline: '1px solid #D4DBE1',
    width: '100%',
    borderBottom: '2px solid #ffffff',
    backdropFilter: 'blur(10px)',
    transition: 'all .5s',
    padding: '10px 5vw',
    color: 'white',
}

const Nav = () => {
    return (
      <HStack style={navbarstyle}>
        <Box style={{ paddingTop: "10px" }}>
          <Flex style={imagestyle}>
            <Img src={casiarLogo} />
            <>imberlite</>
          </Flex>
        </Box>

        <Spacer />
  
      <ButtonComp title='Connect Wallet'/>
      </HStack>
    );
}

export default Nav