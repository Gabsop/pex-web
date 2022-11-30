// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { PexLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("gray.500", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <PexLogo h="83px" w="153px" mb="20px" mr="100px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
