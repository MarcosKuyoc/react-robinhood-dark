/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';
import { OptionsChart } from '../OptionsChart';
import { useFetchHistoricTickers } from '@/hooks/useFetchHistoric';
import { useHistoricalStore } from '@/store/store-historical';

export const StockChart: React.FC = () => {
  const { dateFrom, dateTo } = useHistoricalStore();
  const { eod } = useFetchHistoricTickers('MSFT', dateFrom, dateTo);

  const CustomTooltip: React.FC<{
    active?: boolean | undefined;
    payload?: any[] | undefined;
  }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-secondary p-2 text-white rounded-lg">
          <p>{data.name}</p>
          <p className='text-center'>{data.close}</p>
        </div>
      );
    }
  
    return null;
  }

  return (
    <div>
      <div className='flex mt-10'>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={eod}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid
              strokeDasharray="5"
              vertical={false}
              horizontal={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="linear"
              dataKey="close"
              stroke="#20ce99"
              strokeWidth={2}
              fill="transparent"
              dot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <OptionsChart />
    </div>
  );
}

