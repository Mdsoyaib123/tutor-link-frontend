import DetailsProfiles from "@/components/modules/tutor/tutorsDetails/DetailsProfiles";
import { getSingleTutor } from "@/services/tutor";
import React from "react";

const TutorProfile = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;
  const { data: tutor } = await getSingleTutor(tutorId);

  return (
    <div className="max-w-7xl py-28 w-full mx-auto">
      <DetailsProfiles tutor={tutor} />
    </div>
  );
};

export default TutorProfile;
