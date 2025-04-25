// app/dashboard/page.tsx
export const dynamic = 'force-dynamic';

import ActiveUsersChart from "@/components/dashboard/ActiveUsersChart";
import WorkApplyChart from "@/components/dashboard/WorkApplyChart";
import InterviewStatusPieChart from "@/components/dashboard/InterviewStatusPieChart";
import InterviewSuccessRateCard from "@/components/dashboard/InterviewSuccessRateCard";
import SuccessRateCard from "@/components/dashboard/SuccessRateCard";

export default function DashboardPage() {
  const successRate = 78;

  return (
    <div className="space-y-6">
      {/* ─── Row 1: Active Users + two cards ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Users spans two columns on large */}
        <div className="lg:col-span-2">
          <ActiveUsersChart />
        </div>
        <div className="flex flex-col gap-6">
          <InterviewSuccessRateCard />
          <SuccessRateCard rate={successRate} />
        </div>
      </div>

       {/* ─── Row 3: Work vs Applications chart ─── */}
       <div>
        <WorkApplyChart />
      </div>

      {/* ─── Row 2: Interview Funnel pie + another card (if any) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funnel spans two cols */}
        <div className="lg:col-span-2">
          <InterviewStatusPieChart />
        </div>
        {/* You could put a card here, or just leave blank */}
        <div className="lg:col-span-1">
          {/* e.g. a placeholder or more cards */}
        </div>
      </div>

     
    </div>
  );
}
