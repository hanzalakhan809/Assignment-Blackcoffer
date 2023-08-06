import { PieChart as RechartsPieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart = ({ data }) => {
  return (
    <RechartsPieChart width={900} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPieChart>
  );
};

export default PieChart;
