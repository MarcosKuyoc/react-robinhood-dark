/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchTickers } from '@/services/tickers';
import { DataTickers } from '@/services/tickers.interface';
import { useQuery } from '@tanstack/react-query';

interface Page {
  tickers: DataTickers[];
  suggested: DataTickers | any;
}

export const useFetchDataTickers = (page: number) => {
  const {
    isLoading,
    isError,
    data,
    refetch,
  } = useQuery<Page>({
    queryKey: ['tickers', page],
    queryFn: () => fetchTickers(page),
    keepPreviousData: true
  });
  return {
    isLoading,
    isError,
    tickers:
      data?.tickers ?? [],
    suggested: data?.suggested ?? [],
    refetch
  };
};
