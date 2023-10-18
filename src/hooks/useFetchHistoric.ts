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

export const useFetchHistoricTickers = (symbol: string, dateFront: string, dateTo: string) => {
  const {
    isLoading,
    isError,
    data,
    refetch,
  } = useQuery<Page>({
    queryKey: ['historic', symbol, dateFront, dateTo],
    queryFn: () => fetchHistoricTickers(symbol, dateFront, dateTo),
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
