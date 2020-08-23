import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import { Movie as MovieModel } from '../models/Movie';
import { Header } from './Header';
import { Search } from './Search';
import { Movies } from './Movies';

const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s=man`;

export default function Page() {
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((json: { Search: MovieModel[] }) => {
        setMovies(json.Search);
      });
  }, []);

  const handleSearch = () => {};

  return (
    <Box w="100vw" h="100vh">
      <Header />
      <Search onSearch={handleSearch} />
      <Movies movies={movies} />
    </Box>
  );
}
