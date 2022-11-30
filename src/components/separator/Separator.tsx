import { Flex } from "@chakra-ui/react";
import React from "react";

const HSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex h="1px" w="100%" bg="#F4F7FE" {...rest} />;
};

const VSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex w="1px" bg="#F4F7FE" {...rest} />;
};

export { HSeparator, VSeparator };
