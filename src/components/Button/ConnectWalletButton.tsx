import { ButtonProps } from "./types";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
// import { useWeb3React } from "@web3-react/core";
// import { InjectedConnector } from '@web3-react/injected-connector';

const WalletButton: React.FC<ButtonProps> = ({ title, children, color }) => {

    // const Injected = new InjectedConnector({
    // supportedChainIds: [1, 3, 4, 5, 42],
    // });

    // const { activate, deactivate } = useWeb3React();

    // const callWallet = () => { activate(Injected) }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const normalBtn = {
        padding: "5px 12px",
        backgroundColor: isHovering ? "#e3433a" : "#ff433a",
        margin: "5px",
        borderRadius: "15px",
        border: "none",
        transition: "all .5s",
        color: `${color}`,
    };

    return (
        <>
        <Button
            // onClick={callWallet}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={normalBtn}
        >
            {children}
            {title}
        </Button>
        </>
    );
};

export default WalletButton;
