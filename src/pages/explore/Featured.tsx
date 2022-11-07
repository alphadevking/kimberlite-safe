import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { featuredLockData } from "./lockAPI";
import { styles } from "../../global/view";

export const Featured = () => {
  return (
    <>
      <TableContainer>
        <Table variant='unstyled'>

          <Thead>
            <Tr>
              <Th></Th>
              <Th>Token or LP Address</Th>
              <Th>Amount Locked</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {featuredLockData.map((val, key) => {
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
