import { NextResponse } from "next/server";

import { client } from "@/lib/sanity";

export async function PUT(req, { params }) {
  try {
    const { postId } = params;

    await client
      .patch(postId) 
      .inc({ views: 1 }) 
      .commit();

    return new NextResponse("OK", {
      status: 200,
    });
  } catch(err) {
    return new NextResponse("Internal Server Error", { 
      status: 500 
    });
  }
}
