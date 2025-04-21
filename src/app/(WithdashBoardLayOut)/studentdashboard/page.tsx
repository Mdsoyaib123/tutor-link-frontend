// app/dashboard/page.tsx
"use client";

import MyRequestsTable from "./MyRequestsTable";
import Sidebar from "./SideBar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">My Requests</h2>
        <MyRequestsTable />
      </main>
    </div>
  );
}
