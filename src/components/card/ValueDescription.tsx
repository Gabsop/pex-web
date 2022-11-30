// Chakra imports
import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
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
  const { name, value } = props;
  const textColor = "white";
  const textColorSecondary = "semiTransparent.700";

  return (
    <Card p="0px" backgroundColor="transparent">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "flex-start", xl: "flex-start" }}
        justify={{ base: "center", xl: "center" }}
      >
        <Stat my="auto" p="0px">
          <Flex alignItems="flex-end">
            <StatNumber
              color={textColor}
              fontSize={{
                base: "3xl",
              }}
            >
              {value}
            </StatNumber>
          </Flex>
          <Flex alignItems="flex-end">
            <StatLabel
              lineHeight="100%"
              pb="11px"
              color={textColorSecondary}
              fontSize={{
                base: "sm",
              }}
            >
              {name}
            </StatLabel>
          </Flex>
        </Stat>
      </Flex>
    </Card>
  );
}
