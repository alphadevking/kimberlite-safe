import { Box, Img, Flex, Spacer, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import casiarLogo from '../../assets/kimberlite.png'
import { ColorModeSwitcher } from '../../utils/ColorModeSwitcher';
import WalletButton from '../Button/ConnectWalletButton';

const imagestyle = {
    width: '1.3em',
    height: '1.3em',
}

const navbarstyle = {
    background: 'transparent',
    outline: '1px solid #D4DBE1',
    borderBottom: '2px solid inherit',
    backdropFilter: 'blur(10px)',
    transition: 'all .5s',
    padding: '10px 5vw',
    fontSize: '20px'
}

const Nav = () => {

    return (

      <HStack style={navbarstyle}>

        <Box pt='10px'>

          <Link to={"/"}>
            <Flex style={imagestyle}>
              <Img src={casiarLogo} />{'imberlite'}
            </Flex>
          </Link>

        </Box>

        <Spacer />

        <WalletButton title='Connect' color='white' />

        <ColorModeSwitcher />
        
      </HStack>
    );
}

export default Nav