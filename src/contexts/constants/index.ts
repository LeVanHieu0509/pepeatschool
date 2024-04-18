require("dotenv").config();

const artifacts = {
  PEPEATSCHOOLTESTING: require("../../Abi/PEPEATSCHOOL.json"),
};

export const processCus = {
  TOKEN: {
    PEPE_ADDRESS: "0x41c3fc84F65308a29Cd3Da2AB7F5584F4A978e8b",
  },
};
export const PepeTokenAddress = processCus.TOKEN.PEPE_ADDRESS;
export const PepeTokenABI = artifacts.PEPEATSCHOOLTESTING.abi;
