import FormData from "form-data";
require("dotenv").config();

require("dotenv").config();

const axios = require("axios");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2ODBhOTM5MC1iOGZkLTQ3NjAtYmI5OC0yOGMyZGQ5YjkxMWMiLCJlbWFpbCI6ImxldmFuaGlldTJrMS5kekBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMWJmMzBlM2VmYjM5YmJkMDUwOTIiLCJzY29wZWRLZXlTZWNyZXQiOiIyYzAwODliZmVlZjEzNzIxYjg3YjA0MDAwYjk5MzY0NzUzZjBkNjVhZjQ3MmM5YzQyMzZlZGRlYTVlZmM1OGRiIiwiaWF0IjoxNzAyMjE3MzU4fQ.T9Auo62-lau8KJgrAF_LB3Qw2UUbpPwgutHaH-JuHkE";
export const pinFileToIPFS = async (file, data) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("pinataMetadata", JSON.stringify(data));

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", pinataOptions);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; `,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// const uploadImage = async (file) => {
//   try {
//     const data = new FormData();
//     data.append("file", fs.createReadStream(file));
//     data.append("pinataMetadata", '{"name": "pinnie"}');

//     const res = await axios("https://api.pinata.cloud/pinning/pinFileToIPFS", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.PINATA_JWT}`,
//       },
//       body: data,
//     });
//     const resData = await res.json();
//     console.log("File uploaded, CID:", resData.IpfsHash);
//     return resData.IpfsHash;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const uploadMetadata = async (data) => {
  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Metadata uploaded, CID:", res.data.IpfsHash);
    return res.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
};

const mintNft = async (CID, wallet) => {
  try {
    const data = JSON.stringify({
      recipient: `polygon:${wallet}`,
      metadata: `https://turquoise-obliged-centipede-803.mypinata.cloud.cloud/ipfs/${CID}`,
    });
    const res = await axios(
      "https://staging.crossmint.com/api/2022-06-09/collections/default/nfts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "x-client-secret": `${process.env.CROSSMINT_CLIENT_SECRET}`,
          "x-project-id": `${process.env.CROSSMINT_PROJECT_ID}`,
        },
        body: data,
      }
    );
    const resData = await res.json();
    const contractAddress = resData.onChain.contractAddress;
    console.log("NFT Minted, smart contract:", contractAddress);
    console.log(
      `View NFT at https://testnets.opensea.io/assets/mumbai/${contractAddress}`
    );
  } catch (error) {
    console.log(error);
  }
};

const main = async (file, name, description, external_url, wallet) => {
  try {
    // const imageCID = await uploadImage(file);
    // const metadataCID = await uploadMetadata(name, description, external_url, imageCID);
    // await mintNft(metadataCID, wallet);
  } catch (error) {
    console.log(error);
  }
};

main(
  "./pinnie.png",
  "Pinnie",
  "A Pinata NFT made with Crossmint and Pinata",
  "https://pinata.cloud",
  "0x2Fd0BD0d1c846682F3730cB3F6c22052B43495A9"
);
