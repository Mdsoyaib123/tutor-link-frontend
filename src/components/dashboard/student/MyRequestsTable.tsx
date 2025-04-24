"use client";

const data = [
  {
    profile: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Williams",
    address: "123 Birchwood Lane, Greenville",
    subjects: "Chemistry",
    availability: "3/19/2025 - 4/8/2025",
    accepted: "No",
    payment: "Pending",
  },
  {
    profile: "https://i.pravatar.cc/150?img=2",
    name: "Jule Johnson",
    address: "456 Elm Street, Metropolis",
    subjects: "English, Literature",
    availability: "3/24/2025 - 3/29/2025",
    accepted: "Yes",
    payment: "Pending",
  },
  {
    profile: "https://i.pravatar.cc/150?img=3",
    name: "Tafiyatul Jannat",
    address: "Nandanpur bazer, Gopalur Upazila, Tangail",
    subjects: "Mathematics, Physics",
    availability: "3/25/2025 - 3/28/2025",
    accepted: "No",
    payment: "Pending",
  },
];

export default function MyRequestsTable() {
  return (
    <div className="bg-white dark:bg-gray-600 shadow rounded-lg overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-100 text-blue-800">
          <tr className="text-left">
            <th className="p-3">#</th>
            <th className="p-3">Profile</th>
            <th className="p-3">Tutor Name</th>
            <th className="p-3">Address</th>
            <th className="p-3">Subjects</th>
            <th className="p-3">Availability</th>
            <th className="p-3">Accepted</th>
            <th className="p-3">Payment</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">
                <img
                  src={d.profile}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
              </td>
              <td className="p-3">{d.name}</td>
              <td className="p-3">{d.address}</td>
              <td className="p-3">{d.subjects}</td>
              <td className="p-3">{d.availability}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    d.accepted === "Yes" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                >
                  {d.accepted}
                </span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 rounded bg-yellow-400 text-white text-xs">
                  {d.payment}
                </span>
              </td>
              <td className="p-3">
                <button
                  className={`px-4 py-1 text-white rounded text-sm ${
                    d.accepted === "Yes"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={d.accepted !== "Yes"}
                >
                  Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
