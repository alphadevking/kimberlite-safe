import { BiSearch } from "react-icons/bi"
import { kInputProps } from "./types"
import { HStack } from '@chakra-ui/react';

export const CustomInput: React.FC<kInputProps> = (
    {
        type,
        placeholder,
        style,
        search,
        required,
    }
) => {
  return (
    <HStack>
    <input type={type} placeholder={placeholder} style={style} required={required}/>
    {search? <BiSearch color="#ff433a"/> : <></>}
    </HStack>
  )
}
