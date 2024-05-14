import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

//INTRNAL IMPORT
import Style from "./DropZone.module.css";

const DropZone = ({ name, code, uploadToIPFS, setImage }) => {
  const [fileUrl, setFileUrl] = useState<any>(null);

  const onDrop = async (acceptedFile: any) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    const publicUrl = `https://gateway.pinata.cloud/ipfs/${url}`;
    setFileUrl(publicUrl);
    setImage(publicUrl);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "image/*",
    maxSize: 5000000,
  });

  console.log({ fileUrl });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
            <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                <img
                  className="has-mask h-36 object-center"
                  src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                  alt="freepik image"
                />
              </div>
            </div>
            <input {...getInputProps()} />
          </label>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <div className="border p-2 border-black">
              <Image src={fileUrl} alt="nft image" width={200} height={200} />
            </div>

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <span>Tên khoá học:</span>
                  {name || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <span>Mã code: </span>
                  {code || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
