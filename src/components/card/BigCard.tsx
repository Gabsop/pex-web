// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { HSeparator } from "components/separator/Separator";
import Scrollbars from "react-custom-scrollbars-2";

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  backgroundColor: string;
  growth?: string | number;
  secondaryGrowth?: string | number;
  value: string | number;
  negative?: boolean;
}) {
  const { startContent, endContent, name, backgroundColor, value } = props;
  const textColor = "white";
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card
      py="16px"
      px="0px"
      backgroundColor={useColorModeValue(backgroundColor, "secondaryGray")}
    >
      <Flex
        my="auto"
        h="100%"
        px="16px"
        align={{ base: "flex-start", xl: "flex-start" }}
        justify={{ base: "center", xl: "center" }}
        flexDirection={startContent ? "column" : "row"}
        borderBottom="1px"
        borderColor="white"
      >
        <Flex mb="10px">{startContent}</Flex>

        <Stat my="auto">
          <Flex alignItems="flex-end">
            <StatNumber
              color={textColor}
              fontSize={{
                "3xl": "5xl",
                base: "4xl",
              }}
            >
              {value}
            </StatNumber>
          </Flex>
          <Flex alignItems="flex-end">
            <StatLabel
              lineHeight="100%"
              pb="11px"
              color="semiTransparent.700"
              fontSize={{
                base: "2xl",
              }}
            >
              {name}
            </StatLabel>
          </Flex>
        </Stat>
      </Flex>
      <Flex w="max-content" px="16px" py="10px">
        {endContent}
      </Flex>
    </Card>
  );
}
