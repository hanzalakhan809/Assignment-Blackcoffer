import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip,CartesianGrid,Legend,ResponsiveContainer } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={400} >
    <RechartsBarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Legend />
      <Bar dataKey="topic" fill="#FF8042" />
      <Bar dataKey="region" fill="#0088FE" />
      <Bar dataKey="relevance" fill="#00C49F" />
      <Bar dataKey="insight" fill="#FFBB28" />
    </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
