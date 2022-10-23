import { Box, Img, Flex, Spacer } from '@chakra-ui/react';
import casiarLogo from '../../assets/kimberlite.png'
import Button from '../Button/Button';


const imagestyle = {
    width: '1.1rem',
    paddingBottom: '4px',
}

const navbarstyle = {
    background: 'transparent',
    // outline: '1px solid #D4DBE1',
    width: '100%',
    boxShadow: '.5px .5px 1px #D4DBE1',
    backdropFilter: 'blur(10px)',
    transition: 'all .5s',
    padding: '0px 5vw'
}

const Nav = () => {
    return (
      <Flex style={navbarstyle}>
        <Box style={{paddingTop: '10px'}}>
          <Flex>
            <Img src={casiarLogo} style={imagestyle} />
            <>imberlite</>
          </Flex>
        </Box>

        <Spacer />
        <Button title='Connect' />
      </Flex>
    );
}

export default Nav