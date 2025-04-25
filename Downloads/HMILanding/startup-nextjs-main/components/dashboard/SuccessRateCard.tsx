// components/dashboard/SuccessRateCard.tsx
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface SuccessRateCardProps {
  rate: number; // e.g. 83
}

export default function SuccessRateCard({ rate }: SuccessRateCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex items-center">
      {/* Left icon */}
      <div className="p-3 bg-green-100 rounded-full">
        <CheckCircleIcon className="h-6 w-6 text-green-600" />
      </div>

      {/* Content */}
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium">Success Rate</h3>
        <div className="mt-1 flex items-center">
          {/* Label */}
          <span className="text-sm text-gray-700 mr-3">Live rate</span>
          {/* Bar */}
          <div className="relative flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-green-500 transition-width duration-500 ease-in-out"
              style={{ width: `${rate}%` }}
            />
          </div>
          {/* Percentage */}
          <span className="ml-3 text-sm font-medium text-gray-900">
            {rate}%
          </span>
        </div>
      </div>
    </div>
  );
}
