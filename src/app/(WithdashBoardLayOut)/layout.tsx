import Sidebar from "@/components/dashboard/student/SideBar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col sm:flex-row md:flex">
      <Sidebar />
      <div className="w-[80%] mt-20 mx-auto sm:mt-20 md:mt-20"> {children}</div>
    </div>
  );
};

export default Dashboardlayout;
