import connectToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamaic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const {pin, accountId, uid} = await req.json()

    const getCurrentAccount = await Account.findOne({_id : accountId, uid})

    if(!getCurrentAccount){

      return NextResponse.json({
        success : false,
        message : 'Account not found'
      })
    }

    const checkPin = await compare(pin, getCurrentAccount.pin)

    if(checkPin) {
      return NextResponse.json({
        success : true,
        message : 'Welcome!!'
      })
    } else {
      return NextResponse.json({
        success : false,
        message : 'Incorrect PIN! Please try again'
      })
    }

  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
