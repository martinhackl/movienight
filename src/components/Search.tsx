import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/core';

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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchTerm}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
      />
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
