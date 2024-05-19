import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useAuth } from '../context/auth';

export const useApod = () => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return {
      isLoading: false,
      data: null,
    };
  }
  return useQuery(
    'apod',
    async () => {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`,
      );
      res.data.apiName = 'Astronomy Picture of the Day';
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: false,
      onError: (error) => {
        console.error('Error fetching APOD data:', error);
      },
    },
  );
};

export const useMarsRoverPhotos = () => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return {
      isLoading: false,
      data: null,
    };
  }
  return useMutation(
    async (params) => {
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${params}&api_key=${import.meta.env.VITE_NASA_API_KEY}`,
      );
      return res.data;
    },
    {
      onError: (error) => {
        console.error('Error fetching Mars rover photos:', error);
      },
    },
  );
};
