import DetailsProfiles from "@/components/modules/tutor/tutorsDetails/DetailsProfiles";
import { getSingleTutor } from "@/services/tutor";
import React from "react";

const TutorProfile = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params; 
  const { data: tutor } = await getSingleTutor(tutorId);  // Fetch the single tutor data using the tutorId

  return (
    <div className="max-w-7xl py-28 w-full mx-auto">
      <DetailsProfiles tutor={tutor} /> {/* Pass the fetched tutor data to the DetailsProfiles component */}
    </div>
  );
};

export default TutorProfile;
