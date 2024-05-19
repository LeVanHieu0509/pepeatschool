import AdminScreen from "src/screens/admin";

interface AdminCourseProps {}

const AdminCourse = ({}: AdminCourseProps) => {
  return (
    <>
      <h1>Create New NFT</h1>
      <p>
        You can set preferred display name, create your profile URL and manage
        other personal settings.
      </p>

      <AdminScreen />
    </>
  );
};

export default AdminCourse;
