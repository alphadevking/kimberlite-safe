import { Box, Img, Flex, Spacer, HStack } from '@chakra-ui/react';
import casiarLogo from '../../assets/kimberlite.png'
import { ColorModeSwitcher } from '../../utils/ColorModeSwitcher';
import WalletButton from '../Button/ConnectWalletButton';

const imagestyle = {
    width: '1.4rem',
    paddingBottom: '4px',
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

          <Flex style={imagestyle}>
            <Img src={casiarLogo} />
            <>imberlite</>
          </Flex>

        </Box>

        <Spacer />

        {/* <ButtonComp onClick={() => {activate(WalletConnect)}} title='Connect Wallet' color='white'
        /> */}
        <WalletButton title='Connect' color="white"/>

        <ColorModeSwitcher />

      </HStack>
    );
}

export default Nav