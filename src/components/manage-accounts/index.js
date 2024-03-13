"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function ManageAccounts() {
    const {accounts, setAccounts} = useContext(GlobalContext)

    async function getAllAccounts(){
        const res = await fetch('/api/account/get-all-accounts')      
    }
  return (
    <div className="min-h-screen flex justify-center flex-col items-center relative">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-white font-bold text-[54px] my-[36px]">Who's watching??</h1>
      </div>
    </div>
  );
}
