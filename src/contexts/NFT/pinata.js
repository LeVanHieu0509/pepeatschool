import FormData from "form-data";
require("dotenv").config();

const axios = require("axios");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYTEyYTA1My00YzAyLTQ4MzMtYWEwMC0wYzEzYzI4MzljYzIiLCJlbWFpbCI6ImxldmFuaGlldS53b3Jrc3BhY2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhkOTdkOGUyZWJlOWRiZjRhYTYyIiwic2NvcGVkS2V5U2VjcmV0IjoiMzhmNDZkZDVhY2JlYzY2MTIwYzdkZDkzZjM5M2U3NGIyNTJiYjEzMDczNWYzZTM1NjBhNTdhOTNjZWRlY2RjMyIsImlhdCI6MTcxNTY2MTQzOH0.8OeBCPGQS-KAy5gbbHbIIIQU6Gr03nQmZmDBBkzfGlU";
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
      metadata: `https://azure-known-gull-617.mypinata.cloud.cloud/ipfs/${CID}`,
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
