import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message, id } = await req.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          message,
          post: id
        }
      })
    });

    const data = await response.json();

    return NextResponse.json(data.data);
  } catch(error) {
    return new NextResponse("Internal Server Error", { 
      status: 500 
    });

  }
}