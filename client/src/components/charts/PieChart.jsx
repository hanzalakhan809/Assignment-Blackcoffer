import { Legend } from 'chart.js';
import { React, useState, useEffect } from 'react';
import { PieChart as RechartsPieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart = ({ data, open }) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set isMobile to true if window width is <= 768px, otherwise false
      setMobile(window.innerWidth <= 768);
    }

    // Subscribe to window resize events
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Unsubscribe from resize events when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          cx="50%"  // Centered
          cy="50%"  // Centered
          outerRadius={isMobile ? 85 : 150}  // Percentage or static value
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>

  );
};

export default PieChart;
