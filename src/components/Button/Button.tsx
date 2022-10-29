import { ButtonProps } from "./types";
import { useState } from 'react';
import { Button } from "@chakra-ui/react";

const ButtonComp: React.FC<ButtonProps> = (
    {
        title,
        children,
        color,
    }
) => {
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const normalBtn = {
      padding: "5px 12px",
      backgroundColor: isHovering ? "#e3433a" : "#ff433a",
      margin: "5px",
      borderRadius: "15px",
      border: "none",
      transition: "all .5s",
      color: `${color}`,
    };

    return(
        <>
            <Button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={normalBtn}>{children}{title}</Button>
        </>
    )
}

export default ButtonComp