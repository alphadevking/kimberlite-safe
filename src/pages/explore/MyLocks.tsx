import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { myLockData } from "./lockAPI";
import { styles } from '../../global/view';

export const MyLocks = () => {
  return (
    <>
      <TableContainer>
        <Table variant='unstyled'>
          {/* <TableCaption>Present Locks</TableCaption> */}
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Token or LP Address</Th>
              <Th>Amount Locked</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {myLockData.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{val.id}</Td>
                  <Td>{val.tokenAdd}</Td>
                  <Td>{val.amount}</Td>
                  <Td><Link to={'/info'} style={styles}>View</Link></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
