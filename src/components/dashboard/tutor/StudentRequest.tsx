/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { selectCurrentUser } from "@/Redux/Features/Auth/authSlice";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
=======
import React, { useState ,useEffect} from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

type Request = {
  email: string;
  message: string;
  status: boolean;
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
    status: false,
  },
  {
    email: "rayaan@gmail.com",
    message: "Can you guide me on a science project?",
    status: true
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: true,
  },
  {
    email: "meera@gmail.com",
    message: "Looking for a weekly English tutor.",
    status: false,
  },
];
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09

export default function RequestList() {
  const currentUser = useSelector(selectCurrentUser);

  const [requests, setRequests] = useState([]);
<<<<<<< HEAD

=======
  
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/permits`, {
          next: { revalidate: 30 },
        });
<<<<<<< HEAD

        const data = await res.json();
        console.log("response", data);

        if (currentUser?.email) {
          const filtered = data?.data?.filter(
            (b: any) => b.tutorId.email === currentUser.email
          );
=======
        
        const data = await res.json();
        console.log('response', data)

        if (currentUser?.email) {
          const filtered = data?.data?.filter((b: any) =>b.tutorId.email === currentUser.email);
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09
          setRequests(filtered);
        } else {
          setRequests([]);
        }
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
<<<<<<< HEAD

=======
    
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09
    fetchRequest();
  }, [currentUser?.email]);

  const handleAcceptRequest = async (requestId: string) => {
<<<<<<< HEAD
=======

>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/permits/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isAccept: true }), // Set isAccept to true
        }
      );
      const data = await response.json();
<<<<<<< HEAD
      console.log(data);
=======
      console.log(data)
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09

      // if (response.ok) {
      //   // Update the requests state after accepting the request
      //   setRequests((prevRequests) =>
      //     prevRequests.map((request) =>
      //       request._id === requestId ? { ...request, isAccept: true } : request
      //     )
      //   );
      //   toast.success(data.message || "Request accepted!");
      // } else {
      //   toast.error(data.message || "Failed to accept the request.");
      // }
    } catch (error) {
      console.error(error);
      toast.error("Error while accepting the request.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4  overflow-y-auto max-h-[500px]">
      <h2 className="text-center text-xl font-bold mb-6">Request Form</h2>

      <div className="space-y-4">
        {requests.map((req: any, idx: number) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
<<<<<<< HEAD
              <div className="font-bold text-lg text-gray-900">
                {req.userEmail}
              </div>
=======
              <div className="font-bold text-lg text-gray-900">{req.userEmail}</div>
>>>>>>> c00e275b1b355e6631cd47ba3e39336037b4fc09
            </div>
            <span
              className={`text-white text-sm font-semibold px-4 py-2 rounded-full`}
            >
              {req.isAccept ? (
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-not-allowed">
                  Accepted
                </button>
              ) : (
                <button
                  onClick={() => handleAcceptRequest(req?.tutorId?._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                  Accept
                </button>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
