import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid ,Legend} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineChart = ({ data }) => {
  return (
    <RechartsLineChart width={1200} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" />
      <Line type="monotone" dataKey="value2" stroke="#0088FE" />
      <Line type="monotone" dataKey="value3" stroke="#FFBB28" />
      <Line type="monotone" dataKey="value4" stroke="#FF8042" />
    </RechartsLineChart>
  );
};

export default LineChart;
