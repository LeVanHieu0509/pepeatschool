import useClickAway from "hooks/use-click-away";
import React, { useContext, useRef } from "react";
import AppContext from "src/contexts/app";

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  const {
    account,
    ether,
    networkConnect,
    tokenData,
    connectWallet,
    setReloading,
    loading,
    reLoading,
    setAccount,
    setNetworkConnect,
    open,
    setOpen,
  } = useContext(AppContext);

  return (
    <>
      {account ? (
        <div className="circle" onClick={() => setOpen(true)}>
          <img
            height="40"
            width="40"
            src="https://tse1.mm.bing.net/th?id=OIP.712SH6ln__0ko2AT13KxrwAAAA&pid=Api&P=0&h=180"
            alt="Cloud Chen"
          />
        </div>
      ) : (
        <div className="circle">
          <img
            height="40"
            width="40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn_glo4bNA1D8lEntyiH5TPCnKXmTVkTol90B7zGM5Q&s"
            alt="Cloud Chen"
          />
        </div>
      )}
    </>
  );
};

export default Avatar;
