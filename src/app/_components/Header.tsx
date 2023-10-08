
import React, {FC} from 'react';
import {Box, Button, Container} from "@mui/material";
import Image from "next/image";
import CustomTab from "@/components/custom-tab/CustomTab";

interface Props {

}

const Header: FC<Props> = () => {
  
  const tabs = [{label: 'sss'}]
  
  return (
    <Box bgcolor={'white'}>
    <Container maxWidth={'lg'} >
      <Box display={'flex'} py={5} width={'100%'} justifyContent={'space-between'}>
        <Image src={'/images/logo.webp'} alt={'asd'} width={110} height={47} />
        <Button>ورود / ثبت نام</Button>
      </Box>
      
      <Box>
          <CustomTab  tabs={tabs}/>
      </Box>
    </Container>
    </Box>
  );
};

export default Header;
