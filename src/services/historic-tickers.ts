import { dateFormat } from "@/helpers/parse-date";
import { EodResponse } from "./tickers.interface";

export const fetchHistoricTickers = async (symbol: string, dateFront: string, dateTo: string) => {
  console.log(`${symbol}-${dateFront}-${dateTo}`);
  let name = 'eod-MSFT-1M.json';
  if (dateFront === '2023-10-10') {
    name = 'eod-MSFT-1W.json';
  }
  if (dateFront === '2023-04-20') {
    name = 'eod-MSFT-6M.json';
  }
  const res = await fetch(`/data/${name}`);
  const data = await res.json();
  if (!res.ok) throw new Error('Network not found');
  const eod: EodResponse[] = data.data.eod;

  const result = eod.map((item) => {
    return  {
      name: item.date ? dateFormat(item.date) : item.date,
      open: item.open,
      close: item.close
    }
  })
  
  return {
    eod: result,
  };
};