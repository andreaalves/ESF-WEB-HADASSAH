import * as FiIcons from "react-icons/fi";
import { IconButton, Flex, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { DateTime } from "luxon";

export function getColumn(
  deleteFunction: (id: string) => void,
  editPath: string
) {
  const columns = [
    {
      Header: "Data do Agendamento",
      accessor: "dataAgendamento",
      Cell: ({ row }: any) =>
        DateTime.fromISO(row.original.dataAgendamento)
          .plus({ hours: 3 })
          .toFormat("dd/MM/yyyy"),
    },
    {
      Header: "Colaborador",
      accessor: "colaborador.nome",
    },
    {
      Header: "Cliente",
      accessor: "cliente.razaoSocial",
    },
    {
      Header: "Visita",
      accessor: "",
    },
    {
      Header: "Pedido",
      accessor: "",
    },
    {
      Header: " ",
      Cell: ({ row }: any) => (
        <Flex as="main" alignItems="center">
          <HStack spacing={2}>
            <ChakraLink href={`${editPath}/${row.original.id}`}>
              <IconButton
                size="sm"
                aria-label="Editar"
                colorScheme="blue"
                bg="blue.500"
                _hover={{
                  bg: "blue.700",
                }}
                icon={<FiIcons.FiEdit2 size={18} color="#eeeef2" />}
              />
            </ChakraLink>
            <ChakraLink
              onClick={(e) => {
                e.preventDefault();
                deleteFunction(row.original.id);
              }}
              href="/"
            >
              <IconButton
                size="sm"
                aria-label="Editar"
                colorScheme="red"
                bg="red.500"
                _hover={{
                  bg: "red.700",
                }}
                icon={<FiIcons.FiXSquare size={18} color="#eeeef2" />}
              />
            </ChakraLink>
          </HStack>
        </Flex>
      ),
      disableSortBy: true,
      disableFilters: true,
    },
  ];

  return columns;
}
