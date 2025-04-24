"use client";

import React from "react";

type Request = {
  email: string;
  message: string;
  status: "Accepted" | "Pending" | "Rejected";
};

const statusStyles = {
  Accepted: "bg-green-500",
  Pending: "bg-yellow-500",
  Rejected: "bg-red-500",
};

const requests: Request[] = [
  {
    email: "jannat@gmail.com",
    message: "I need help with mathematics.",
    status: "Accepted",
  },
  {
    email: "rayaan@gmail.com",
    message: "Can you guide me on a science project?",
    status: "Pending",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: "Rejected",
  },
];

export default function RequestList() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4  overflow-y-auto max-h-[500px]">
      <h2 className="text-center text-xl font-bold mb-6">Request Form</h2>

      <div className="space-y-4">
        {requests.map((req, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <div className="font-bold text-lg text-gray-900">{req.email}</div>
              <div className="text-gray-600 text-sm">{req.message}</div>
            </div>
            <span
              className={`text-white text-sm font-semibold px-4 py-2 rounded-full ${
                statusStyles[req.status]
              }`}
            >
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
