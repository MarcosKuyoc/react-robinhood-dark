/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchHistoricTickers } from '@/services/historic-tickers';
import { useQuery } from '@tanstack/react-query';

interface Historic {
  name: string;
  open: number;
  close: number;
}
interface Page {
  eod: Historic[];
}

export const useFetchHistoricTickers = (symbol: string, startDate: string, endDate: string) => {
  const {
    isLoading,
    isError,
    data,
    refetch,
  } = useQuery<Page>({
    queryKey: ['historic', symbol, startDate, endDate],
    queryFn: () => fetchHistoricTickers(symbol, startDate, endDate),
    keepPreviousData: true
  });
  return {
    isLoading,
    isError,
    eod:
      data?.eod ?? [],
    refetch
  };
};
