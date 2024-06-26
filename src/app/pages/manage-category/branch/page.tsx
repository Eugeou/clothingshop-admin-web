import React from "react";
import { Tags } from "lucide-react";
import ManageBranch from "@/src/components/category/ManageBranch";

const ManageBranchPage: React.FC = () => {

  return (
    <div className="p-4 bg-white shadow-2xl border border-gray-200 h-full w-full rounded-3xl">
      <div className="flex space-y-0 mb-6 ml-0 border border-gray-300 space-x-2 items-center bg-white rounded-xl shadow-xl w-1/4 h-12"> 
        <Tags className="ml-5 flex text-lg font-bold text-center text-indigo-600" />
        <h3 className="space-y-0 font-semibold">Manage Branch</h3>
      </div>
      <ManageBranch />
      
    </div>
  );
};

export default ManageBranchPage;
