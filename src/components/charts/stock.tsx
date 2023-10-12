/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Ene', value: 120 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
  { name: 'Abr', value: 180 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 210 },
  { name: 'Jul', value: 280 },
  { name: 'Ago', value: 230 },
  { name: 'Sep', value: 300 },
  { name: 'Oct', value: 270 },
  { name: 'Nov', value: 320 },
  { name: 'Dic', value: 290 },
];

export const StockChart: React.FC = () => {

  const CustomTooltip: React.FC<{
    active?: boolean | undefined;
    payload?: any[] | undefined;
  }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-secundary p-2 text-white rounded-lg">
          <p>{data.name} - {data.value}</p>
        </div>
      );
    }
  
    return null;
  }

  return (
    <div className='flex mt-5'>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="5"
          vertical={false}
          horizontalCoordinatesGenerator={(props) => {
            return [(props.yAxis.height /2) + props.yAxis.y]
          }
          } />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="linear"
          dataKey="value"
          stroke="#20ce99"
          strokeWidth={2}
          fill="transparent"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

