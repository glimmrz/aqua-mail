import User from "@/lib/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db/connect-db";

export async function POST(req) {
  try {
    await connectDb();

    let body = await req.json();

    if (body.password.trim().length < 8)
      return NextResponse.json(
        { msg: "Password must be at least 8 characters long." },
        { status: 400 }
      );

    if (body.password !== body.confirmPassword)
      return NextResponse.json(
        { msg: "Passwords do not match." },
        { status: 400 }
      );

    const emailExist = await User.findOne({ email: body.email });
    if (emailExist) {
      return NextResponse.json(
        {
          msg: "There is an account associated with this email. Try logging in.",
        },
        { status: 400 }
      );
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Creating new user
    const newUser = new User({
      ...body,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { msg: "Account created successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
