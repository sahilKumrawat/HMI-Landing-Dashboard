// components/dashboard/InterviewSuccessRateCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from "recharts";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const TARGET_RATE = 78; // e.g. 78% success rate from your API

export default function InterviewSuccessRateCard() {
  const [rate, setRate] = useState(0);

  // animate from 0 → TARGET_RATE
  useEffect(() => {
    let start = 0;
    const step = TARGET_RATE / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= TARGET_RATE) {
        start = TARGET_RATE;
        clearInterval(timer);
      }
      setRate(Math.round(start));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const data = [{ name: "Success Rate", value: rate, fill: "#48BB78" }];

  return (
    <div className="bg-white rounded-lg p-6 shadow flex items-center">
      <div className="p-3 bg-green-100 rounded-full mr-4">
        <CheckBadgeIcon className="h-6 w-6 text-green-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium">Live Interview Success</h3>
        <div className="relative h-32">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="100%"
              barSize={10}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                // minAngle={15}
                cornerRadius={10}
                background
                dataKey="value"
              />
              <Tooltip formatter={(val: number) => `${val}%`} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{rate}%</span>
            <span className="text-xs text-gray-500">Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
