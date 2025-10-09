import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RatingChart({ ratings }) {
  const ratingsData = ratings.map((star) => {
    return {
      name: star.name,
      value: star.count,
    };
  });

  const chartData = ratingsData.reverse();

  return (
    <div className='w-full h-56 md:h-80 bg-gray-100  mt-10'>
      <h2 className='text-lg font-semibold mb-4'>Ratings</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={chartData}
          layout='vertical'
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis type='number' />
          <YAxis dataKey='name' type='category' />
          <Tooltip />
          <Bar
            dataKey='value'
            fill='#FF8C00'
            barSize={20}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
