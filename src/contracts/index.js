const fetchContract = (signerOrProvider, address, ABI) =>
  new ethers.Contract(address, ABI, signerOrProvider);

export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");

    //check account has connected done?
    const account = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = account[0];

    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");

    //check account has connected done?
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];

    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const disconnectWallet = async () => {
  try {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        // This will clear the permissions and effectively "log out" the user from your application's perspective
        const result = await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });

        return result;
      } catch (error) {
        console.error("Error during logout:", error);
      }
    }
  } catch (error) {
    console.error("Failed to fetch permissions:", error);
  }
};
