import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid ,Legend,ResponsiveContainer} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
    <RechartsLineChart width={1200} height={400} data={data} className='bg-white'>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Legend />
      <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
      <Line type="monotone" dataKey="likelihood" stroke="#0088FE" />
      <Line type="monotone" dataKey="relevance" stroke="#FFBB28" />
      {/* <Line type="monotone" dataKey="value4" stroke="#FF8042" /> */}
    </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
