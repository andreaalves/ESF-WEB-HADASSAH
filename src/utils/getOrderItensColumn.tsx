import * as FiIcons from 'react-icons/fi';
import { IconButton, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';

export function getItensOrderColumn(
  deleteFunction: (e: any, id: string) => void,
  editPath: string
) {
  const columns = [
    {
      Header: 'Nome',
      accessor: 'produtos.nome',
    },
    {
      Header: 'Pr Unitário',
      accessor: 'precoLiquido',
      Cell: ({ row }: any) => (
        <span>R$ {Number(row.original.preco_liquido).toFixed(2)}</span>
      ),
    },
    {
      Header: 'Margem',
      accessor: 'margem',
      Cell: ({ row }: any) => (
        <span>{Number(row.original.margem * 100).toFixed(2)} %</span>
      ),
    },
    {
      Header: 'Qtd',
      accessor: 'quantidade',
    },
    {
      Header: 'SubTotal',
      accessor: 'total',
      Cell: ({ row }: any) => (
        <span>
          R$ {(row.original.preco_liquido * row.original.quantidade).toFixed(2)}
        </span>
      ),
    },

    // {
    //   Header: " ",
    //   Cell: ({ row }: any) => (
    //     <Flex as="main" alignItems="center">
    //       <HStack spacing={2}>
    //         <ChakraLink href={`${editPath}/${row.original.id}`}>
    //           <IconButton
    //             size="sm"
    //             aria-label="Editar"
    //             colorScheme="blue"
    //             bg="blue.500"
    //             _hover={{
    //               bg: "blue.700",
    //             }}
    //             icon={<FiIcons.FiEdit2 size={18} color="#eeeef2" />}
    //           />
    //         </ChakraLink>
    //         <ChakraLink
    //           onClick={(e) => {
    //             deleteFunction(e, row.original.id);
    //           }}
    //           href="/"
    //         >
    //           <IconButton
    //             size="sm"
    //             aria-label="Editar"
    //             colorScheme="red"
    //             bg="red.500"
    //             _hover={{
    //               bg: "red.700",
    //             }}
    //             icon={<FiIcons.FiXSquare size={18} color="#eeeef2" />}
    //           />
    //         </ChakraLink>
    //       </HStack>
    //     </Flex>
    //   ),
    //   disableSortBy: true,
    //   disableFilters: true,
    // },
  ];

  return columns;
}
