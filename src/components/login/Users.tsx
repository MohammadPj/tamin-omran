import React, {FC} from 'react';

interface Props {
  promise: any
}

const Users: FC<Props> = async ({promise}) => {
  const users = await promise

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
