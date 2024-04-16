import Head from "next/head";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import { AdminLayoutWrapper } from "./styled";
import { useRouter } from "next/router";
import ModalCustom from "@components/modal-custom";
import { ShowModal } from "src/@custom-types";
import AppContext from "src/contexts/app";

interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode | any;
}

const ThemeWrapper = ({ children, component }: ThemeWrapperProps) => {
  const router = useRouter();
  const {
    account,
    ether,
    networkConnect,
    tokenData,
    connectWallet,
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
    </ThemeProvider>
  );
};

export default ThemeWrapper;
