/* eslint-disable @typescript-eslint/no-explicit-any */
interface IDataResponse {
  data: any
  status: number
}

export interface IHttpClient {
  get: (url: string) => Promise<IDataResponse>
}

export class HttpClientFetch implements IHttpClient {
  async get (url: string): Promise<IDataResponse> {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not OK')
    } 
    const data = await response.json()
    return { data, status: response.status }
  }
}
