import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/NavBar/Nav";
import { RouterLinks } from "./utils/RouterLinks";

function App() {


  return (
    <Box color='white'>
      <Nav/>
      <RouterLinks/>
      <Footer/>
    </Box>
  );
}

export default App;
