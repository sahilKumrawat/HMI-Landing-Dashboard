// app/dashboard/jobs/page.tsx
export const dynamic = 'force-dynamic';

import Link from "next/link";

export default function JobsPage() {
  // dummy data — swap for real API call
  const jobs = [
    { id: 1, title: "Frontend Engineer", company: "Acme Corp" },
    { id: 2, title: "Backend Engineer", company: "Beta LLC" },
    { id: 3, title: "Full-Stack Developer", company: "Gamma Inc" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Jobs</h1>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-medium">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            <Link
              href={`/dashboard/jobs/${job.id}`}
              className="text-indigo-600 hover:underline text-sm"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
