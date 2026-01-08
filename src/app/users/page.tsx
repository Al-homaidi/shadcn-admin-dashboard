import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "u1",
      username: "john.doe",
      email: "john.doe@gmail.com",
      role: "admin",
      status: "active",
      lastSeen: "2 mins ago",
    },
    {
      id: "u2",
      username: "jane.smith",
      email: "jane.smith@example.com",
      role: "user",
      status: "active",
      lastSeen: "1 hour ago",
    },
    {
      id: "u3",
      username: "bob.jones",
      email: "bob.jones@test.com",
      role: "user",
      status: "inactive",
      lastSeen: "2 days ago",
    },
    {
      id: "u4",
      username: "alice.williams",
      email: "alice.williams@demo.com",
      role: "guest",
      status: "banned",
      lastSeen: "1 week ago",
    },
  ];
};

const UsersPage = async () => {
  const data = await getData();

  return (
    <div className=''>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default UsersPage