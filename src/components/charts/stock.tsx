/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';
import { OptionsChart } from '../OptionsChart';
import { useFetchHistoricTickers } from '@/hooks/useFetchHistoric';

// const data = [
//   { name: 'Ene', value: 120 },
//   { name: 'Feb', value: 150 },
//   { name: 'Mar', value: 200 },
//   { name: 'Abr', value: 180 },
//   { name: 'May', value: 250 },
//   { name: 'Jun', value: 210 },
//   { name: 'Jul', value: 280 },
//   { name: 'Ago', value: 230 },
//   { name: 'Sep', value: 300 },
//   { name: 'Oct', value: 270 },
//   { name: 'Nov', value: 320 },
//   { name: 'Dic', value: 290 },
// ];

export const StockChart: React.FC = () => {
  const { eod } = useFetchHistoricTickers('MSFT', '2022-09-01', '2022-09-30');

  const CustomTooltip: React.FC<{
    active?: boolean | undefined;
    payload?: any[] | undefined;
  }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-secundary p-2 text-white rounded-lg">
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
              // horizontalCoordinatesGenerator={(props) => {
              //   return [(props.yAxis.height /2) + props.yAxis.y]
              // }}
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
            {/* <Line
              type="linear"
              dataKey="open"
              stroke="red"
              strokeWidth={2}
              fill="transparent"
              dot={false}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <OptionsChart />
    </div>
  );
}

