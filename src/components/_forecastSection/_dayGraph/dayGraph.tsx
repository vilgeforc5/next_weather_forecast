import { ForecastDay } from '@/types/forecastApiTypes';
import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface DayGraphProps {
  className?: string;
  hours: ForecastDay["hour"]
}

interface GraphSlice {
  name: string;
  temp: number;
}

const DayGraph: React.FC<DayGraphProps> = ({ className, hours }) => {

  const hoursData = hours.reduce<Array<GraphSlice>>((accum, current) => {
    const hour = current.time.split(" ")[1];
    return [...accum, {name: hour, temp: current.temp_c}]
  }, [])

  return (
    <div className={`${className || ""} w-full  h-52 sm:h-64 lg:h-72 xl:h-96  bg-slate-purple-gradient rounded-lg`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={hoursData}
          margin={{
            left: -20,
            top: 20,
            right: 10
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value, name) => [value, name === "temp" ? "Температура" : name]}/>
          <Line type="monotone" dataKey="temp" stroke="#8884d8"  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default DayGraph;