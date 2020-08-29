import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Movie as MovieModel } from '../models/Movie';
import { Header } from './Header';
import { Search } from './Search';
import { Movies } from './Movies';

async function fetchMovies(searchTerm = 'man') {
  const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  return fetch(`${MOVIE_API_URL}&s=${searchTerm}`)
    .then((response) => response.json())
    .then((json: { Search: MovieModel[] }) => json.Search);
}

export default function Page() {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies().then((result) => setMovies(result));
  }, []);

  const handleSearch = (searchTerm: string) => {
    fetchMovies(searchTerm).then((result) => {
      setMovies(result);
      setCurrentSearchTerm(searchTerm);
    });
  };

  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Search onSearch={handleSearch} />
      {currentSearchTerm.length > 0 && (
        <Heading as="h3" px={16}>
          Results for <em>{currentSearchTerm}</em>:
        </Heading>
      )}
      {movies?.length > 0 ? (
        <Movies movies={movies} />
      ) : (
        <Box px={16}>No movies found!</Box>
      )}
    </Box>
  );
}
