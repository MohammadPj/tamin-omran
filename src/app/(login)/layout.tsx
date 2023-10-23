import React, {FC} from 'react';

interface Props {
  children: React.ReactNode
}

const LoginLayout: FC<Props> = ({children}) => {

  return (
    <div>
      LoginLayout
      {children}
    </div>
  );
};

export default LoginLayout;
