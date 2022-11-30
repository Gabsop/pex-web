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
    <Card py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "center" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <Flex alignItems="flex-end">
            <StatNumber
              color={textColor}
              fontSize={{
                base: "2xl",
              }}
            >
              {value}
            </StatNumber>
            {secondaryGrowth ? (
              <Text
                color="secondaryGray.600"
                fontSize="xs"
                fontWeight="500"
                mb="4px"
                ml="4px"
              >
                {secondaryGrowth}
              </Text>
            ) : null}
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
