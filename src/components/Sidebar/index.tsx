"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import AppContext from "src/contexts/app";
import IconChatGpt from "./icon-chat-gpt";
import IconOverview from "./icon-overview";
import IconUpload from "./icon-upload";
import IconChat from "./icon-chat";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { setTapAdmin, tapAdmin, account } = useContext(AppContext);
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  const listMenu = [
    {
      title: "Pepe Overview",
      icon: <IconOverview />,
      type: "OVERVIEW",
    },
    {
      title: "Pepe Gpt",
      icon: <IconChatGpt />,
      type: "PEPEGPT",
    },
    {
      title: "Pepe Community",
      icon: <IconChat />,
      type: "CHAT",
    },
    {
      title: "Upload Course",
      icon: <IconUpload />,
      type: "UPLOAD-COURSE",
    },
  ];

  const isAdmin = account == "0x8229c4e44c9c43c4656a5d8d7057a2db416b216b";

  const list = useMemo(
    () =>
      !isAdmin ? listMenu.filter((i) => i.type !== "UPLOAD-COURSE") : listMenu,
    [isAdmin, account]
  );

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-2 lg:px-2">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {list.map((item) => (
                <li>
                  <div
                    onClick={() => setTapAdmin(item.type)}
                    className={`cursor-pointer group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      (pathname.includes("calendar") &&
                        "bg-graydark dark:bg-meta-4") ||
                      (tapAdmin == item.type && "bg-graydark")
                    }`}>
                    {item.icon}
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
