"use client";
import React, { FC } from "react";
import CustomMenu from "~/components/custom-mui/custom-menu/CustomMenu";
import { handleLogout } from "~/helpers/methods";
import { Button } from "@mui/material";
import { getDictionary } from "~/i18n";
import CustomMenuList from "~/components/custom-mui/custom-menu/CustomMenuList";
import {useUser} from "~/store/user/userSlice";

interface ProfileButtonProps {}

const ProfileButton: FC<ProfileButtonProps> = () => {
  const dictionary = getDictionary();
  const {userInfo} = useUser()

  return (
    <div>
      <CustomMenuList
        anchor={
          <Button  variant={"outlined"}>
            {userInfo?.firstName + " " + userInfo?.lastName}
          </Button>
        }
        items={[
          {
            onClick: handleLogout,
            content: dictionary("common.header.logout"),
          },
        ]}
        menuItemProps={{sx: {width: 100}}}
      />
    </div>
  );
};

export default ProfileButton;
