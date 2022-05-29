import { FC, useRef } from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import { useQuery } from '@apollo/client';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { InformationButton, PopularMovieImage, PopularMoviesTitle, PopularMoviesWrapper } from './styled';
import { APIMovieData, Params } from '../../types';
import { POPULAR } from '../../queries/movies';
import { useNavigate } from 'react-router-dom';

const PopularMovies: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const navigate = useNavigate();
  const { data } = useQuery<{ popularMovies: APIMovieData }, { params: Params }>(POPULAR, {
    variables: { params: { page: 1 } },
  });
  const moviesData = data?.popularMovies.results;

  const slidesPerView = Math.floor((ref.current?.getBoundingClientRect().width || 0) / 200);

  return (
    <PopularMoviesWrapper ref={ref}>
      <PopularMoviesTitle variant="h4" gutterBottom align="left">
        Popular movies
      </PopularMoviesTitle>
      <Swiper slidesPerView={slidesPerView} spaceBetween={0} grabCursor={true} navigation={true} modules={[Navigation]}>
        {moviesData?.map(movieData => (
          <SwiperSlide key={movieData?.id}>
            <PopularMovieImage>
              <img src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`} alt="lazy" loading="lazy" />
              <ImageListItemBar
                title={movieData?.original_title}
                subtitle={movieData?.release_date.slice(0, 4)}
                actionIcon={
                  <InformationButton
                    aria-label={`info about`}
                    onClick={() => {
                      navigate(`/movie/${movieData?.id}`);
                    }}
                  >
                    <InfoIcon />
                  </InformationButton>
                }
              />
            </PopularMovieImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </PopularMoviesWrapper>
  );
};

export default PopularMovies;
