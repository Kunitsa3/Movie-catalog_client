import { FC, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { APIMovieData, Params } from '../../types';
import { useQuery } from '@apollo/client';
import { UPCOMING } from '../../queries/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  IconsWrapper,
  MovieInformation,
  MovieInformationWrapper,
  RatingWrapper,
  UpcomingMoviesCard,
  UpcomingMoviesTitle,
  UpcomingMoviesWrapper,
  Rating,
  MovieImage,
} from './styled';

const UpcomingMovies: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { data } = useQuery<{ upcomingMovies: APIMovieData }, { params: Params }>(UPCOMING, {
    variables: { params: { page: 1 } },
  });
  const moviesData = data?.upcomingMovies.results;
  const slidesPerView = Math.floor((ref.current?.getBoundingClientRect().width || 0) / 300);

  return (
    <UpcomingMoviesWrapper ref={ref}>
      <UpcomingMoviesTitle variant="h4" gutterBottom align="left">
        Upcoming movies
      </UpcomingMoviesTitle>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        slidesPerGroup={1}
        navigation={true}
        modules={[Navigation]}
      >
        {moviesData?.map(movieData => (
          <SwiperSlide key={movieData?.id}>
            <UpcomingMoviesCard elevation={8}>
              <MovieInformationWrapper>
                <MovieInformation>
                  <Typography component="div" variant="h5">
                    {movieData?.original_title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {movieData?.release_date.slice(0, 4)}
                  </Typography>
                </MovieInformation>
                <IconsWrapper>
                  <RatingWrapper>
                    <GradeIcon color="info" />
                    <Rating variant="subtitle1">{movieData?.vote_average}</Rating>
                  </RatingWrapper>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </IconsWrapper>
              </MovieInformationWrapper>
              <MovieImage>
                <img src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`} alt="lazy" loading="lazy" />
              </MovieImage>
            </UpcomingMoviesCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </UpcomingMoviesWrapper>
  );
};

export default UpcomingMovies;
