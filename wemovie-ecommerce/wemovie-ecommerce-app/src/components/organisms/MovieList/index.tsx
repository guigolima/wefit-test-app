import React, { useEffect, useState } from "react";

import MovieCard from "@/components/molecules/MovieCard";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { MovieProps } from "@/constants/interfaces/MovieProps";
import { getMoviesList } from "@/api/axios";

import { LoadingContainer, MovieGrid } from "./styles";

const MovieList = () => {
  const [moviesList, setmoviesList] = useState<MovieProps[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getMoviesList().then((res: MovieProps[]) => {
      setmoviesList(res);
      setloading(false);
    });
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  return (
    <MovieGrid>
      {moviesList.map((item: MovieProps) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </MovieGrid>
  );
};

export default MovieList;
