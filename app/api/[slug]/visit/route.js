import { NextResponse } from "next/server";

import { getPostBySlug } from "@/services";

export async function PUT(req, { params }) {
  try {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return new NextResponse("Not Found", { 
        status: 404 
      });
    }

    await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          views: parseInt(post.attributes.views) + 1
        }
      }),
    });

    return new NextResponse("OK", {
      status: 200,
    });
  } catch(err) {
    return new NextResponse("Internal Server Error", { 
      status: 500 
    });
  }
}
