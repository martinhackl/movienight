import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';

export function Header() {
  return (
    <Flex>
      <Heading as="h1" size="lg">
        Movienight
      </Heading>
    </Flex>
  );
}
