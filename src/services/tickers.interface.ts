export interface DataTickers {
  symbol: string // Ticker symbol
  name: string // Ticker name
  latestEndOfDayClosePrice: number | null // Ticker latest end-of-day close price
  latestEndOfDayOpenPrice: number | null // Ticker latest end-of-day close price
  percentage: number | null // Ticker latest end-of-day close price
  stockExchangeAcronym: string // Stock exchange acronym
  stockExchangeCountry: string // Stock exchange country
}

interface IPaginationResponse {
  limit: number
  offset: number
  count: number
  total: number
}

export interface TickersResponse {
  pagination: IPaginationResponse
  data: DataTickers[]
}
export interface EodResponse {
  'open': number
  'close': number
  'high': number
  'low': number
  'volume': number
  'date': string
}

export interface IDetailTicker {
  symbol: string // Ticker symbol
  name: string // Ticker name
  stockExchangeName: string // Stock exchange name
  stockExchangeAcronym: string // Stock exchange acronym
  stockExchangeCountry: string // Stock exchange country
  eod: EodResponse // Latest end-of-day information
}

export interface ITickers {
  find: (limit: number, offset: number) => Promise<TickersResponse>
  // details: (symbol: string) => Promise<IDetailTicker>
  // eodByDates: (symbol: string, dateFrom: string, dateTo: string) => Promise<EodResponse[]>
  // eodByDate: (symbol: string, date: string) => Promise<EodResponse>
}
