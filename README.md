# chakra-simple-pagination

*This project is based on the original chakra-ui-table-w-pagination-sort-search*

https://www.npmjs.com/package/chakra-simple-pagination

Pagination tables component for Chakra-UI

- [chakra-pagination](#chakra-ui-table-w-pagination-sort-search)
- [Getting started](#getting-started)
  - [Install](#install)
    - [Props](#props)
    - [Import and use](#import-and-use)
  - [Example](#example)
  - [Demo](#demo)


# Getting started

## Install

`npm install chakra-simple-pagination`


### Props

`pageSize` : {Number} - Number of items to display per page

`setPageSize`: {Function} - Setter for pageSize

`pageIndex`: {Number} - Current page index in the table pagination

`setPageIndex`: {Function} - Setter for pageIndex

`totalItemsCount`: {Number} - Length of the data array to be displayed in the table

`pageSizeOptions`: {Array.Number} - Options for the number of items that can be displayed per page. - Default = [10,25,50]

`colorScheme`: Pagination color - Default = "teal"

`showOptions`: {Boolean} - Whether to show options - Default = true

`labelOptions`: {String} - Options label - Default = "Items shown"

`showQuantity`: {Boolean} - Whether to show quantity - Default = true


### Import and use


```javascript
import {PaginationTable} from "table-pagination-chakra-ui"

const your_function = () => {

  return (
    <>    
        
        {/*your code here*/}
        
        <PaginationTable
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          totalItemsCount={data.length}
          pageSizeOptions={[10, 25, 50]}
        />
    </>

  )
}

```



## Example

```javascript
import {PaginationTable} from "table-pagination-chakra-ui"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Table = () => {

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (<TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>
                  FirstName
              <Th>
                  LastName
              </Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {data
                .map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item.firstName}</Td>
                      <Td>{item.lastName}</Td>
                    </Tr>
                  );
                })
                .slice(pageSize * pageIndex, pageSize * (pageIndex + 1))
            }
          </Tbody>
        </Table>
        <PaginationTable
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          totalItemsCount={data.length}
          pageSizeOptions={[10, 25, 50]}
        />
      </TableContainer>)

}
```