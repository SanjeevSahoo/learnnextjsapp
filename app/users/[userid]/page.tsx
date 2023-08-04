import { getUserById } from "@/app/services";
import IUser from "@/app/types/IUser";

async function UserPage({ params }: { params: { userid: string } }) {
  const userId = params.userid;
  const userData: Promise<{ users: IUser[] }> = getUserById(userId);

  const { users } = await userData;

  if (users && users.length > 0) {
    return (
      <div>
        Users Details given below:
        <div>Name - {users[0].username}</div>
      </div>
    );
  }
  return <div>Users details not found</div>;
}

export default UserPage;
