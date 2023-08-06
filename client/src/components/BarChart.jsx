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
      <Bar dataKey="value1" fill="#FF8042" />
      <Bar dataKey="value2" fill="#0088FE" />
      <Bar dataKey="value3" fill="#00C49F" />
      <Bar dataKey="value4" fill="#FFBB28" />
    </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
