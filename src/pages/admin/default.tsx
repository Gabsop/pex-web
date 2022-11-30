/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Box,
  Flex,
  Icon,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { MdDashboard, MdOutlineAttachMoney } from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import {
  columnsDataComplex,
  TableData,
} from "views/admin/default/variables/columnsData";
import planos from "views/admin/default/variables/planos.json";
import categorias from "views/admin/default/variables/categorias.json";
import tiposDePlanos from "views/admin/default/variables/tiposDePlanos.json";
import AdminLayout from "layouts/admin";
import BigStatistics from "components/card/BigStatistics";
import BigCard from "components/card/BigCard";

import ValueDescription from "components/card/ValueDescription";
import { DatePicker } from "components/fields/DatePicker";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const bigCardBoxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const menuBg = useColorModeValue("white", "navy.800");

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} mt="30px">
        <>
          <Flex w="100%" gap="20px" mb="20px">
            <Flex
              w={{ sm: "100%", md: "auto" }}
              alignItems="center"
              minW="644px"
              justifyContent="space-between"
              flexDirection="row"
              bg={menuBg}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              p="10px"
              mb="50px"
              borderRadius="30px"
              boxShadow={shadow}
            >
              <Text fontSize="sm" color="secondaryGray.600" ml="15px">
                Filtrar por data
              </Text>
              <Flex gap="10px">
                <DatePicker
                  icon={
                    <Icon
                      as={MdDashboard}
                      width="15px"
                      height="15px"
                      color="inherit"
                    />
                  }
                  date
                  borderRadius="30px"
                  placeholder="Data inicial"
                />
                <DatePicker
                  icon={
                    <Icon
                      as={MdDashboard}
                      width="15px"
                      height="15px"
                      color="inherit"
                    />
                  }
                  date
                  borderRadius="30px"
                  placeholder="Data final"
                />
              </Flex>
            </Flex>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, lg: 3, "2xl": 4 }}
            gap="20px"
            mb="20px"
            minH="310px"
          >
            <BigCard
              backgroundColor="red.300"
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={bigCardBoxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={useColorModeValue("red.300", "white")}
                    />
                  }
                />
              }
              endContent={
                <ValueDescription name="Média por Cliente" value="R$ 67,20" />
              }
              name="Receita Total"
              value="R$ 312.321,00"
            />
            <BigCard
              backgroundColor="blue.100"
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={bigCardBoxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={useColorModeValue("blue.100", "white")}
                    />
                  }
                />
              }
              endContent={
                <ValueDescription name="Média por Cliente" value="R$ 42,30" />
              }
              name="Lucro Total"
              value="R$ 74.421,00"
            />
            <BigCard
              backgroundColor="green.200"
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={bigCardBoxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={useColorModeValue("green.200", "white")}
                    />
                  }
                />
              }
              endContent={
                <ValueDescription name="Média por Cliente" value="R$ 12,40" />
              }
              name="Lucro por venda"
              value="R$ 3,12"
            />
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              growth="+2,6% (+12)"
              name="Clientes Ativos"
              value="3.312"
            />
            <MiniStatistics
              growth="+15,3% (+2)"
              name="Novos Clientes"
              value="12"
            />
            <MiniStatistics
              growth="+42,6% (+8)"
              name="Clientes Adicionados"
              value="42"
            />
            <MiniStatistics
              growth="-22,6% (+R$ 12,20)"
              name="LTV"
              negative
              value="R$142.32"
            />
            <MiniStatistics
              growth="+42,6% (+3)"
              secondaryGrowth="32"
              name="Turnover"
              value="24,3%"
            />
            <MiniStatistics
              growth="+32,6% (+6)"
              secondaryGrowth="12"
              name="Turnover recuperado"
              value="54,42%"
            />
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, "2xl": 4 }}
            gap="20px"
            mb="20px"
          >
            <BigStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Cotações realizadas"
              value="312.321"
              growth="+15,3% (+223)"
            />
            <BigStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Vendas finalizadas"
              value="212.012"
              growth="+15,3% (+223)"
            />
            <BigStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Cotações não concluídas"
              value="42.021"
              growth="+15,3% (+223)"
            />
            <BigStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Cotações não respondidas"
              value="3.122"
              growth="+15,3% (+223)"
              secondaryGrowth="3%"
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, "2xl": 3 }} gap="20px" mb="20px">
            <ComplexTable
              title="Planos"
              secondaryTitle="123 planos ativos"
              columnsData={columnsDataComplex}
              tableData={planos as unknown as TableData[]}
            />
            <ComplexTable
              title="Categorias"
              secondaryTitle="4 categorias em uso"
              columnsData={columnsDataComplex}
              tableData={categorias as unknown as TableData[]}
            />
            <ComplexTable
              title="Tipos de Planos"
              secondaryTitle="2 tipos em uso"
              columnsData={columnsDataComplex}
              tableData={tiposDePlanos as unknown as TableData[]}
            />
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
