import { useContext } from "react";
import DefaultLayout from "src/components/Layouts/DefaultLayout";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import { UploadCourseScreenWrapper } from "./styled";
import FormUploadCourseScreen from "./upload";

interface UploadCourseScreenProps {}

const UploadCourseScreen = ({}: UploadCourseScreenProps) => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext) ?? {};
  return (
    <UploadCourseScreenWrapper>
      <FormUploadCourseScreen
        uploadToIPFS={uploadToIPFS}
        createNFT={createNFT}
      />
    </UploadCourseScreenWrapper>
  );
};

export default UploadCourseScreen;
