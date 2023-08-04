import { getPostsByUserId, getUserById } from "@/app/services";
import IUser from "@/app/types/IUser";
import { Metadata } from "next";
import { Suspense } from "react";
import UserPosts from "./UserPosts";

export async function generateMetadata({
  params,
}: {
  params: { userid: string };
}): Promise<Metadata> {
  const userId = params.userid;
  const userData: Promise<{ users: IUser[] }> = getUserById(userId);

  const { users } = await userData;

  if (!users || users.length <= 0) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: users[0].dispname,
    description: `This is the page of ${users[0].dispname}`,
  };
}

async function UserPage({ params }: { params: { userid: string } }) {
  const userId = params.userid;
  const userData: Promise<{ users: IUser[] }> = getUserById(userId);
  const postData: Promise<{ posts: IPost[] }> = getPostsByUserId(userId);

  const { users } = await userData;

  if (users && users.length > 0) {
    return (
      <div>
        Users Details given below:
        <div>Name - {users[0].username}</div>
        <Suspense fallback={<h2>Loading...!</h2>}>
          <UserPosts promise={postData} />
        </Suspense>
      </div>
    );
  }
  return <div>Users details not found</div>;
}

export default UserPage;
