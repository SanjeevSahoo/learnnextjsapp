import { getAllUsers } from "../services";
import IUser from "../types/IUser";
import Link from "next/link";

async function UsersListPage() {
  const userData: Promise<{ users: IUser[] }> = getAllUsers();
  const { users } = await userData;
  if (users && users.length > 0) {
    return users.map((item: IUser) => (
      <div key={item.id}>
        <Link href={`/suspensedemo/${item.id.toString()}`}>
          {item.dispname}
        </Link>
      </div>
    ));
  }

  return <div>No Users Found</div>;
}

export default UsersListPage;
