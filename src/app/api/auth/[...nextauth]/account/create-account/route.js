import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamaic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB()

    const {name, pin, uid} = await req.json()

    const isAccountAlreadyExists = await Account.find({uid, name})
    const allAccounts = await Account.find({})

    if(isAccountAlreadyExists){
      return NextResponse.json({
        success: false,
        message: "Please try with a different name",
      });
    }

    if(allAccounts && allAccounts.length === 4){
      return NextResponse.json({
        success: false,
        message: "You can only add 4 accounts maximum",
      });
    }

    const hashPin = await hash(pin, 12)



  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
