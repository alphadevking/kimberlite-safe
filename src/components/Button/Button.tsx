import { ButtonProps } from "./types";
import { useState } from 'react'

const Button: React.FC<ButtonProps> = (
    {
        title,
        children,
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
        padding: '5px 12px',
        backgroundColor: isHovering? '#006089' : '#004266',
        margin: '5px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        transition: 'all .5s',
    }

    return(
        <>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={normalBtn}>{children}{title}</button>
        </>
    )
}

export default Button