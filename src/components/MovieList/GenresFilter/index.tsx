import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { MOVIE_GENRES } from '../../../queries/movies';
import { GenresDetails } from '../../../types';

interface GenresFilterProps {
  handleGenreChange: (event: SelectChangeEvent<string>) => void;
  genre: string;
  label: string;
}

const GenresFilter: FC<GenresFilterProps> = ({ genre, handleGenreChange, label }) => {
  const { data: genres } = useQuery<{ getMoviesGenres: GenresDetails }>(MOVIE_GENRES);
  const genresData = genres?.getMoviesGenres.genres;

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={genre} onChange={handleGenreChange} label={label}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {genresData?.map(genre => (
          <MenuItem value={genre.id} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenresFilter;

