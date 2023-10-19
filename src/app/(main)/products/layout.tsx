import React, {FC} from 'react';

interface Props {
  children: React.ReactNode
}

const ProductsLayout: FC<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ProductsLayout;
