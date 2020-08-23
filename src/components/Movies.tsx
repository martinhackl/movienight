import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/core';
import { Movie } from '../models/Movie';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

export interface Props {
  movies: Movie[];
}

export function Movies({ movies }: Props) {
  return (
    <Flex wrap="wrap" p={4} justifyContent="space-evenly">
      {movies.map((movie, index) => {
        const posterUrl =
          movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

        return (
          <Box
            key={`${index}-${movie.Title}`}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            m={1}
          >
            <Image src={posterUrl} objectFit="cover" />
            <Box p={2}>
              <Box as="h4" fontWeight="semibold" mt={1}>
                {movie.Title}
              </Box>
              <Box as="span" color="gray.600" fontSize="sm">
                {movie.Year}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
