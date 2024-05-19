import React, { useContext, useState } from "react";
import { FormUploadCourseScreenWrapper } from "./styled";
import { useRouter } from "next/router";
import DropZone from "../drop-zone";
import { Button } from "@material-tailwind/react";
import { Flex, FlexColumn } from "styles/common";
import InputCustom from "src/components/Input";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";

interface FormUploadCourseScreenProps {
  uploadToIPFS: any;
  createNFT: any;
}

const FormUploadCourseScreen = ({
  uploadToIPFS,
  createNFT,
}: FormUploadCourseScreenProps) => {
  const { createSale, error } = useContext(NFTMarketplaceContext) ?? {};

  const router = useRouter();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState(null);

  return (
    <FormUploadCourseScreenWrapper>
      <DropZone
        code={code}
        name={name}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />

      <FlexColumn gap={16} className="w-100">
        <InputCustom
          label="Tên khoá học"
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <InputCustom
          label="Mã code"
          onChange={(e: any) => setCode(e.target.value)}
          value={code}
        />
      </FlexColumn>

      <Flex justify="center" className="w-100">
        <Button
          size="sm"
          disabled={false}
          onClick={async () => createNFT(name, "0.000015", image, code)}
          style={{
            color: "#ffffff",
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Upload khoá học
        </Button>

        {error ? <p>{error}</p> : null}

        <Button
          size="sm"
          disabled={false}
          onClick={async () =>
            await createSale(
              "https://gateway.pinata.cloud/ipfs/QmQzPojPZWbmUCvN3Q6GSoH6MVc1Yv1rHLedt8mQd97fQ6",
              "0.015"
            )
          }
          style={{
            color: "#ffffff",
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Upload NFT
        </Button>
      </Flex>
    </FormUploadCourseScreenWrapper>
  );
};

export default FormUploadCourseScreen;
