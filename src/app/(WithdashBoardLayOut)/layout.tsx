import Sidebar from "@/components/dashboard/student/SideBar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col sm:flex-row md:flex ">
      <div className="w-[20%]">
      <Sidebar />
      </div>
      <div className="w-[80%] mx-auto dark:bg-gray-800 pt-20 "> {children}</div>
    </div>
  );
};

export default Dashboardlayout;
