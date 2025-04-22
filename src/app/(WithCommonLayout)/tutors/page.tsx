import BrowseTutors from "@/components/modules/tutor/BrowseTutors";
import { getAllTutors } from "@/services/tutor";
import React from "react";

const TutorsPage = async () => {
  const tutorsData = await getAllTutors();
  console.log(tutorsData ,"tutorsData");
  const tutors = tutorsData?.data || [];
  return (
    <div className="max-w-7xl mx-auto mt-32">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Find an online tutor to help you study
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Browse our list of experienced and verified tutors across various
        subjects. Whether you are preparing for exams or need help understanding
        difficult topics, find the perfect tutor to guide your learning journey.
      </p>

      <div>
        <BrowseTutors tutors= {tutors}></BrowseTutors>
      </div>
    </div>
  );
};

export default TutorsPage;
