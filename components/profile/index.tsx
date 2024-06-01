import useClickAway from "hooks/use-click-away";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import AppContext from "src/contexts/app";
import { disconnectWallet } from "src/contracts";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const router = useRouter();
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
    console.log("result", result);
    if (!result) {
      setOpen(false);
      router.push("/");
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
                src="https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  PEPE AT SCHOOL
                </h3>
                <p className=" text-gray-700 dark:text-gray-300 text-sm">
                  Address: {account?.slice(0, 10)}...
                  {account?.slice(36, account.length)}
                </p>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <Link href="/manager">
                <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                  CMS
                </button>
              </Link>
              <button
                onClick={handleLogoutWallet}
                className="transition-all hover:bg-green-200 flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
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
