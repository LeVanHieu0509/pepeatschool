require("dotenv").config();
const artifacts = {
  PEPEATSCHOOLTESTING: require("../../Abi/PEPEATSCHOOL.json"),
};

export const processCus = {
  TOKEN: {
    PEPE_ADDRESS: "0x717CeE5F7Bc50b8dD03695051333bEa6c4B41708",
  },
};
export const PepeTokenAddress = processCus.TOKEN.PEPE_ADDRESS;
export const PepeTokenABI = artifacts.PEPEATSCHOOLTESTING.abi;
