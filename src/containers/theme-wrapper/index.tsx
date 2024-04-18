import ModalCustom from "@components/modal-custom";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ShowModal } from "src/@custom-types";
import AppContext from "src/contexts/app";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import { AdminLayoutWrapper } from "./styled";

interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode | any;
}

const ThemeWrapper = ({ children, component }: ThemeWrapperProps) => {
  const router = useRouter();
  const [unLock, setUnlock] = useState(false);
  const {
    account,
    ether,
    networkConnect,
    tokenData,
    connectWallet,
    transferTokenUnlock,
    setReloading,
    loading,
    reLoading,
    setAccount,
    setNetworkConnect,
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState<ShowModal>({
    type: null,
    show: false,
    data: null,
    title: "Thông báo",
  });

  const linkNotConnectWallet = !["/_error", "/index.en-US", "/"].includes(
    router.pathname
  );

  console.log("router.pathname", router.pathname);

  useEffect(() => {
    const listenter = function (ev: MouseEvent) {
      const button = ev.target as HTMLButtonElement;
      if (button.tagName === "BUTTON" && !button.disabled) {
        const clickable = button.dataset.clickable;
        if (clickable === "false") {
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }
        button.dataset.clickable = "false";
        button.style.pointerEvents = "none";
        setTimeout(() => {
          button.dataset.clickable = "true";
          button.style.pointerEvents = "";
        }, 300);
      }
    };
    document.addEventListener("click", listenter);
    return () => {
      document.removeEventListener("click", listenter);
    };
  }, []);

  useEffect(() => {
    if (linkNotConnectWallet && router.pathname) {
      setUnlock(false);
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={LightTheme}>
      {children}
      <AdminLayoutWrapper>{component}</AdminLayoutWrapper>

      {linkNotConnectWallet && !account ? (
        <ModalCustom
          show={true}
          onCloseModal={() => {
            setShowModal({
              show: false,
            });
            router.push("/");
          }}
          title="Thông báo"
          primaryBtn={{
            text: "Kết nối",
            onClick: () => connectWallet(),
          }}
          secondaryBtn={{
            text: "Bỏ qua",
            onClick: () => {
              setShowModal({
                show: false,
              });
              router.push("/");
            },
          }}>
          Chúng tôi cần kết nối với Ví của bạn để xem được trang này!
        </ModalCustom>
      ) : null}

      {linkNotConnectWallet && account && !unLock ? (
        <ModalCustom
          show={true}
          onCloseModal={() => {
            setShowModal({
              show: false,
            });
            router.push("/");
          }}
          title="Thông báo"
          primaryBtn={{
            text: "Mở khoá",
            onClick: async () => {
              const result = await transferTokenUnlock();
              setUnlock(result);
            },
          }}
          secondaryBtn={{
            text: "Bỏ qua",
            onClick: () => {
              setShowModal({
                show: false,
              });
              router.push("/");
            },
          }}>
          Bạn cần dùng 1000 PEPEATSCHOOL để mở khoá bài viết?
        </ModalCustom>
      ) : null}
    </ThemeProvider>
  );
};

export default ThemeWrapper;