import React, {FC} from 'react';
import {Box} from "@mui/material";

interface Props {
  promise: any
}

const Users: FC<Props> = async ({promise}) => {
  const users = await promise

  return (
    <Box>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </Box>
  );
};

export default Users;
