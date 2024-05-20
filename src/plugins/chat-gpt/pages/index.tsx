import { useEffect, useState } from "react";
// import Chat from "../components/Chat";
import MobileSiderbar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import useAnalytics from "../hooks/useAnalytics";
import Chat from "../components/Chat";

export default function PepeChat() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <main
      style={{ overflow: "hidden" }}
      className="overflow-hidden w-full h-screen relative flex ">
      <Chat toggleComponentVisibility={toggleComponentVisibility} />
    </main>
  );
}
