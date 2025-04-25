// components/dashboard/WorkApplyChart.tsx
"use client";
import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

type DataPoint = { month: string; work: number; apply: number };
const data: DataPoint[] = [
  { month: 'Jan', work: 12, apply: 8 },
  { month: 'Feb', work: 18, apply: 14 },
  { month: 'Mar', work: 15, apply: 10 },
  { month: 'Apr', work: 22, apply: 17 },
  { month: 'May', work: 19, apply: 12 },
  { month: 'Jun', work: 24, apply: 20 },
  { month: 'Jul', work: 21, apply: 18 },
  { month: 'Aug', work: 17, apply: 13 },
  { month: 'Sep', work: 23, apply: 19 },
];

export default function WorkApplyChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Work vs Applications</h2>
        <select className="border rounded p-1 text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="work" barSize={16} fill="#4A6CF7" name="Work Posted" />
          <Bar dataKey="apply" barSize={16} fill="#F56565" name="Applications" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
