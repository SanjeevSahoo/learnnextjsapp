import { users } from "@/app/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const findUser = users.filter((user) => user.id === slug);
  if (findUser.length <= 0) {
    return NextResponse.json({ users: [] });
  }
  return NextResponse.json({ users: [...findUser] });
}
