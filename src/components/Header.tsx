import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

export function Header() {
  return (
    <Box as="header" p={4} d="flex" alignItems="center" shadow="sm">
      <Heading as="h1" size="lg">
        MovieNight
      </Heading>
    </Box>
  );
}
