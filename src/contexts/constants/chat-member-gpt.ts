require("dotenv").config();
const artifacts = {
  GPT_MEMBER_SHIP: require("../../Abi/GPTMembershipAbi.json"),
};

export const processCus = {
  TOKEN: {
    GPT_MEMBER_SHIP_ADDRESS: "0x604283D3381935601C85Ed044Fe7990c8B18b37d",
  },
};
export const gptMemberShipAddress = processCus.TOKEN.GPT_MEMBER_SHIP_ADDRESS;
export const gptMemberShipABI = artifacts.GPT_MEMBER_SHIP.abi;
