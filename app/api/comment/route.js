import { NextResponse } from "next/server";

import { client } from "@/lib/sanity";

export async function POST(req) {
  try {
    const { name, email, message, id } = await req.json();

    const data = await client.create({
      _type: "comment",
      name,
      email,
      message,
      post: {
        _type: "reference",
        _ref: id
      }
    });

    return NextResponse.json(data);
  } catch(error) {
    return new NextResponse("Internal Server Error", { 
      status: 500 
    });
  }
}