import React from "react";
import { AdminCourseWrapper } from "./styled";
import UpdateCourseScreen from "src/screens/update-course";
import AdminScreen from "src/screens/admin";

interface AdminCourseProps {}

const AdminCourse = ({}: AdminCourseProps) => {
  return (
    <AdminCourseWrapper>
      <h1>Create New NFT</h1>
      <p>
        You can set preferred display name, create your profile URL and manage
        other personal settings.
      </p>

      <AdminScreen />
    </AdminCourseWrapper>
  );
};

export default AdminCourse;
