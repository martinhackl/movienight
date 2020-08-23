import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

export function Header() {
  return (
    <Box as="header" width="100%">
      <Box p="1rem">
        <Heading as="h1" size="lg">
          MovieNight
        </Heading>
      </Box>
    </Box>
  );
}
