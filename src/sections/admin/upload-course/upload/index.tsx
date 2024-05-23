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
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

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
        <InputCustom
          label="Niêm yết với giá (PAS)"
          onChange={(e: any) => setPrice(e.target.value)}
          value={price}
        />
      </FlexColumn>
      {error ? <p>{error}</p> : null}
      <Flex justify="center" gap={16} className="w-100 mt-8">
        <Button
          style={{
            color: "white",
            background: "green",
          }}
          size="sm"
          disabled={false}
          onClick={async () => {
            setLoading(true);
            createNFT(name, String(Number(price) / 10000), image, code);
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Upload khoá học
        </Button>
      </Flex>
    </FormUploadCourseScreenWrapper>
  );
};

export default FormUploadCourseScreen;
