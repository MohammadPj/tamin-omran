import React, {FC} from 'react';
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Image
      src={"/images/home/logo.webp"}
      alt={"asd"}
      width={110}
      height={47}
    />
  );
};

export default Logo;
