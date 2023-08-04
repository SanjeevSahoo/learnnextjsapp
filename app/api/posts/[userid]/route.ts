import { posts } from "@/app/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userid: string } }
) {
  const userId = params.userid;
  const findUserPosts = posts.filter((post) => post.userId === userId);
  if (findUserPosts.length <= 0) {
    return NextResponse.json({ posts: [] });
  }
  return NextResponse.json({ posts: [...findUserPosts] });
}
