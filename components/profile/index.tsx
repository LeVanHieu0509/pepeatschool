import useClickAway from "hooks/use-click-away";
import React, { useContext, useRef } from "react";
import AppContext from "src/contexts/app";
import { disconnectWallet } from "src/contracts";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
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
  const ref = useRef<any>();

  useClickAway(ref, () => {
    setOpen(false);
  });

  const handleLogoutWallet = async () => {
    const result = await disconnectWallet();

    if (!result) {
      setOpen(false);
    }
  };

  return (
    <>
      {open ? (
        <div
          ref={ref}
          className="w-60 absolute right-0 max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  No name
                </h3>
                <p className=" text-gray-700 dark:text-gray-300 text-sm">
                  Address: {account?.slice(0, 10)}...
                  {account?.slice(36, account.length)}
                </p>
              </div>
            </div>
            <div className="flex gap-2 px-2" onClick={handleLogoutWallet}>
              {/* <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
            Follow
          </button> */}
              <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
