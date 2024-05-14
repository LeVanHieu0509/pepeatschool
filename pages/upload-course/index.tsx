import React from "react";
import { UploadCourseWrapper } from "./styled";
import UpdateCourseScreen from "src/screens/update-course";

interface UploadCourseProps {}

const UploadCourse = ({}: UploadCourseProps) => {
  return (
    <UploadCourseWrapper>
      <h1>Create New NFT</h1>
      <p>
        You can set preferred display name, create your profile URL and manage
        other personal settings.
      </p>

      <UpdateCourseScreen />
    </UploadCourseWrapper>
  );
};

export default UploadCourse;
