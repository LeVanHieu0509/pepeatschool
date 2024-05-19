import AdminScreen from "src/screens/admin";
import { AdminCourseWrapper } from "./styled";

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
