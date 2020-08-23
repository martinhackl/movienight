import React, { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/core';

export interface Props {
  onSearch: (searchTerm: string) => void;
}

export function Search({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} d="flex" p={16}>
      <Input
        type="text"
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
        placeholder="Search movies by name..."
        mb={5}
        isFullWidth
      />
      <Button type="submit" size="md" bg="teal.500" color="white">
        Search
      </Button>
    </Box>
  );
}
