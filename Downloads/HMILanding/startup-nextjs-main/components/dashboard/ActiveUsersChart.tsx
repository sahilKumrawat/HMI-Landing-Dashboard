// components/dashboard/ActiveUsersChart.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type DataPoint = { period: string; active: number };

// Sample “weekly” data; swap in your real API results
const initialData: DataPoint[] = [
  { period: "Week 1", active: 120 },
  { period: "Week 2", active: 200 },
  { period: "Week 3", active: 150 },
  { period: "Week 4", active: 240 },
];

export default function ActiveUsersChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  // Simulate fetching data with a brief delay so you see the animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(initialData);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Users</h2>
        <select className="border rounded p-1 text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="active"
            name="Active Users"
            stroke="#4A6CF7"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
