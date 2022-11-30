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

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  secondaryGrowth?: string | number;
  value: string | number;
  negative?: boolean;
}) {
  const {
    startContent,
    endContent,
    name,
    growth,
    secondaryGrowth,
    negative,
    value,
  } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card px="16px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "flex-start", xl: "flex-start" }}
        justify={{ base: "center", xl: "center" }}
        flexDirection={startContent ? "column" : "row"}
      >
        <Flex mb="10px">{startContent}</Flex>

        <Stat my="auto">
          <Flex alignItems="flex-end">
            <StatNumber
              color={textColor}
              fontSize={{
                base: "3xl",
              }}
            >
              {value}
            </StatNumber>
            {secondaryGrowth ? (
              <Text
                color="secondaryGray.600"
                fontSize="md"
                fontWeight="700"
                mb="6px"
                ml="6px"
              >
                {secondaryGrowth}
              </Text>
            ) : null}
          </Flex>
          <Flex alignItems="flex-end">
            <StatLabel
              lineHeight="100%"
              pb="11px"
              color={textColorSecondary}
              fontSize={{
                base: "xs",
              }}
            >
              {name}
            </StatLabel>
          </Flex>
          {growth ? (
            <Flex align="center">
              <Text
                color={negative ? "red.700" : "green.300"}
                fontSize="xs"
                fontWeight="700"
                me="5px"
              >
                {growth}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
