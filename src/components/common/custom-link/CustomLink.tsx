import React, {FC} from 'react';
import Link, {LinkProps} from "next/link";
import {store} from "~/store/store";

interface Props extends LinkProps{
  children: React.ReactNode
}

const CustomLink: FC<Props> = ({href, children, ...props}) => {

  const {lang} = store.getState().common
  return (
    <Link href={`/${lang}/${href}` as any} {...props} >
      {children}
    </Link>
  );
};

export default CustomLink;
