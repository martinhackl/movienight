import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/core';
import { Movie } from '../models/Movie';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

export interface Props {
  movie: Movie;
}

export function Movie({ movie }: Props) {
  const posterUrl =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <Box>
      <Image src={posterUrl} />
      <Box>{movie.Title}</Box>
      <Box>{movie.Year}</Box>
    </Box>
  );
}
