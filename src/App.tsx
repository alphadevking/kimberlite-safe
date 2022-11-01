import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/NavBar/Nav";
import { RouterLinks } from "./utils/RouterLinks";

function App() {
  

  return (

    <Box>

      <Nav/>

      <RouterLinks/>
      
      <Footer/>

    </Box>

  );
}

export default App;
