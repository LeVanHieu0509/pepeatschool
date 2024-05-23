import { Alert } from "@components/alert";
import ModalCustom from "@components/modal-custom";
import { useContext, useEffect, useState } from "react";
import { ShowModal } from "src/@custom-types";
import { NFTCard2 } from "src/components/componentsindex";
import LoadingSection from "src/components/loading";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import AppContext from "src/contexts/app";
import HeaderCourse from "src/sections/course/header";
import { Flex } from "styles/common";
import { CourseScreenWrapper } from "./styled";

interface CourseScreenProps {}

const CourseScreen = ({}: CourseScreenProps) => {
  const [unLock, setUnlock] = useState(false);
  const [showModal, setShowModal] = useState<ShowModal>({
    type: null,
    show: false,
    data: null,
    title: "Thông báo",
  });
  const { transferTokenUnlock, loading, setLoading } = useContext(AppContext);
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    }
  }, [currentAccount]);

  const handleUnlockCourse = (data) => {
    setShowModal({
      show: true,
      data: data,
    });
  };

  return (
    <CourseScreenWrapper>
      <HeaderCourse />

      <div className="mt-4">
        {nfts.length == 0 ? (
          <Flex className="mt-4">
            <LoadingSection color="green" loading={true} />
          </Flex>
        ) : (
          <NFTCard2 NFTData={nfts} onClick={handleUnlockCourse} />
        )}
      </div>

      {showModal.show && currentAccount && !unLock ? (
        <ModalCustom
          show={true}
          onCloseModal={() => {
            setShowModal({
              show: false,
            });
            setUnlock(false);
          }}
          title="Thông báo"
          primaryBtn={{
            loading: loading,
            text: "Mở khoá",
            onClick: async () => {
              setLoading(true);
              const result = await transferTokenUnlock({
                price: Number(showModal.data.price) * 10000,
              });

              if (result) {
                setUnlock(true);
                setLoading(false);
              } else {
                Alert(
                  "WARNING",
                  "Bạn không đủ token PEPE AT SCHOOL để mở khoá Khoá học."
                );
                setUnlock(false);
                setLoading(false);
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
              setUnlock(false);
            },
          }}>
          Bạn cần dùng {showModal.data.price * 10000} PEPEATSCHOOL để mở khoá
          Khoá học?
        </ModalCustom>
      ) : null}

      {unLock ? (
        <ModalCustom
          show={unLock}
          onCloseModal={() => {
            setUnlock(false);
            setShowModal({
              show: false,
            });
          }}
          title="Thông báo mở khoá thành công">
          Mã khoá học của bạn: {showModal?.data?.description}
        </ModalCustom>
      ) : null}
    </CourseScreenWrapper>
  );
};

export default CourseScreen;
