import { useContext, useMemo } from "react";
import DefaultLayout from "src/components/Layouts/DefaultLayout";
import AppContext from "src/contexts/app";
import OverviewScreen from "src/sections/admin/overview";
import PepeGptScreen from "src/sections/admin/pepe-gpt";
import RoomChatScreen from "src/sections/admin/room-chat";
import UploadCourseScreen from "src/sections/admin/upload-course";
import { AdminScreenWrapper } from "./styled";

interface AdminScreenProps {}

const AdminScreen = ({}: AdminScreenProps) => {
  const { tapAdmin } = useContext(AppContext);

  const Content = useMemo(() => {
    switch (tapAdmin) {
      case "OVERVIEW":
        return <OverviewScreen />;
      case "PEPEGPT":
        return <PepeGptScreen />;
      case "CHAT":
        return <RoomChatScreen />;
      case "UPLOAD-COURSE":
        return <UploadCourseScreen />;
    }
  }, [tapAdmin]);

  return (
    <AdminScreenWrapper>
      <DefaultLayout>{Content && Content}</DefaultLayout>
    </AdminScreenWrapper>
  );
};

export default AdminScreen;
