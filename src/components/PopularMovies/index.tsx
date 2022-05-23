import { FC, useRef } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { UpcomingMoviesWrapper } from './styled';
import { APIMovieData, Params } from '../../types';
import { POPULAR } from '../../queries/movies';

const PopularMovies: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { data } = useQuery<{ popularMovies: APIMovieData }, { params: Params }>(POPULAR, {
    variables: { params: { page: 1 } },
  });
  const moviesData = data?.popularMovies.results;

  const slidesPerView = Math.floor((ref.current?.getBoundingClientRect().width || 0) / 200);

  return (
    <UpcomingMoviesWrapper ref={ref}>
      <Typography variant="h5" gutterBottom align="left" sx={{ marginLeft: 5, marginTop: 10 }}>
        Popular movies
      </Typography>
      <Swiper slidesPerView={slidesPerView} spaceBetween={0} grabCursor={true} navigation={true} modules={[Navigation]}>
        {moviesData?.map(movieData => (
          <SwiperSlide key={movieData?.id} style={{ width: '100%' }}>
            <ImageListItem sx={{ width: 180, borderRadius: 4, overflow: 'hidden' }}>
              <img src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`} alt="lazy" loading="lazy" />
              <ImageListItemBar
                title={movieData?.original_title}
                subtitle={movieData?.release_date.slice(0, 4)}
                actionIcon={
                  <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about`}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </UpcomingMoviesWrapper>
  );
};

export default PopularMovies;
