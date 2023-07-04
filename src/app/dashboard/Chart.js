import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import ChartGoogle from 'react-google-charts';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  ['Time', 'Value'],
  ['00:00', 0],
  ['03:00', 300],
  ['06:00', 600],
  ['09:00', 800],
  ['12:00', 1500],
  ['15:00', 2000],
  ['18:00', 2400],
  ['21:00', 2400],
  ['24:00', 4000],
];

export default function Chart() {
  const theme = useTheme();

  const lineChartConfig = {
    chartType: 'LineChart',
    width: '100%',
    height: 170,
  };

  const pieChartOptions = {
    chartArea: { left: 100, right: 16, top: 16, bottom: 20 },
    vAxes: {
      0: {
        title: 'Sales ($)',
        // ticks: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        titleTextStyle: {
          italic: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today
      </Typography>
      <ChartGoogle
        {...lineChartConfig}

        data={data}
        options={pieChartOptions}
        rootProps={{ 'data-chartid': '1' }}
      />
      {/* <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer> */}
    </React.Fragment>
  );
}