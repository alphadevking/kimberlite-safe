import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

// Coinbase Web3ReactProvider
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider:any) => {
  return new Web3Provider(provider);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

    <Web3ReactProvider getLibrary={getLibrary}>

      <BrowserRouter>

        <ChakraProvider>

          <App />

        </ChakraProvider>

      </BrowserRouter>

    </Web3ReactProvider>

  </React.StrictMode>
);
