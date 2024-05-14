import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import { UpdateCourseScreenWrapper } from "./styled";
import { useContext } from "react";
import FormUploadCourseScreen from "src/sections/update-course/upload";

interface UpdateCourseScreenProps {}

const UpdateCourseScreen = ({}: UpdateCourseScreenProps) => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext) ?? {};

  return (
    <UpdateCourseScreenWrapper>
      <FormUploadCourseScreen
        uploadToIPFS={uploadToIPFS}
        createNFT={createNFT}
      />
    </UpdateCourseScreenWrapper>
  );
};

export default UpdateCourseScreen;
