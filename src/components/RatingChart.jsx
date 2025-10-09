import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RatingChart({ ratings }) {
  const ratingsData = ratings.map((star) => {
    return {
      name: star.name,
      value: star.value,
    };
  });
  console.log(ratingsData);
  return (
    <div className='w-full h-[400px] bg-white p-4 rounded-2xl shadow'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          layout='vertical'
          data={ratingsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type='number' />
          <YAxis dataKey='name' type='category' />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar
            dataKey='value'
            fill='#8884d8'
            background={{ fill: "#eee" }}
            label={{ position: "right" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
