import Sidebar from "@/components/dashboard/student/SideBar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]"> {children}</div>
    </div>
  );
};

export default Dashboardlayout;
