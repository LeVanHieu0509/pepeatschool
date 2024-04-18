require("dotenv").config();

const artifacts = {
  PEPEATSCHOOLTESTING: require("../../Abi/PEPEATSCHOOL.json"),
};

export const processCus = {
  TOKEN: {
    PEPE_ADDRESS: "0xF82Fd4B8e8F2Cf058a02A84Ed0D9187eE908dAa1",
  },
};
export const PepeTokenAddress = processCus.TOKEN.PEPE_ADDRESS;
export const PepeTokenABI = artifacts.PEPEATSCHOOLTESTING.abi;
