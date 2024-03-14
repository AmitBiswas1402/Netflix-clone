"use client";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import CircleLoader from "../circle-loader";

export default function ManageAccounts() {
  const { accounts, setAccounts, pageLoader, setPageLoader } =
    useContext(GlobalContext);
  const { data: session } = useSession();

  async function getAllAccounts() {
    const res = await fetch(
      `/api/account/get-all-accounts?id-${session?.user?.uid}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    console.log(data);

    return data
  }

  useEffect(() => {
    getAllAccounts();
  }, []);

  if (pageLoader) return <CircleLoader />;

  return (
    <div className="min-h-screen flex justify-center flex-col items-center relative">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-white font-bold text-[54px] my-[36px]">
          Who's watching??
        </h1>
      </div>
    </div>
  );
}
