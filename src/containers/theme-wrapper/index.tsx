import ModalCustom from "@components/modal-custom";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ShowModal } from "src/@custom-types";
import AppContext from "src/contexts/app";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import { AdminLayoutWrapper } from "./styled";
import { Alert } from "@components/alert";
import { useConfig } from "nextra-theme-docs";

interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode | any;
}

const ThemeWrapper = ({ children, component }: ThemeWrapperProps) => {
  const router = useRouter();
  const [unLock, setUnlock] = useState(false);
  const config = useConfig();
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
    setLoading,
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState<ShowModal>({
    type: null,
    show: false,
    data: null,
    title: "Thông báo",
  });

  const linkNotConnectWallet = ![
    "/_error",
    "/index.en-US",
    "/",
    "/course.en-US",
    "/trade.en-US",
    "/manager.en-US",
    "/blog.en-US",
  ].includes(router.pathname);

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
            loading: loading,
            text: "Mở khoá",
            onClick: async () => {
              setLoading(true);
              const result = await transferTokenUnlock({ price: 1000 });

              if (result) {
                setUnlock(result);
                setLoading(false);
              } else {
                Alert(
                  "WARNING",
                  "Bạn không đủ token PEPE AT SCHOOL để mở khoá bài viết."
                );
                router.push("/");
                setShowModal({
                  show: false,
                });
                return;
              }
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
