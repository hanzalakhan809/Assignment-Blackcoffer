import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip,CartesianGrid,Legend } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BarChart = ({ data }) => {
  return (
    <RechartsBarChart width={1200} height={400} data={data}>
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
  );
};

export default BarChart;
