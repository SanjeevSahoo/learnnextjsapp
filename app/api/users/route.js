import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      id: 1,
      username: "sanjeev",
      dispname: "Sanjeev Sahoo",
    },
    {
      id: 2,
      username: "krishna",
      dispname: "Krishna Singh",
    },
  ];

  return NextResponse.json({ users });
}
