import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "../Navigation/style.css";



const CategoryPanel = (props) => {


    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

      <h3 className="p-3 text-[16 px] font-[550] flex items-center justify-between">
        Shop By Categories<IoCloseSharp onClick={props.closeCategoryPanel} className="cursor-pointer text-[20px]" /></h3>


     <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative">
          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
            Fashion</Button>
            <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />

          <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
           <li className="list-none relative">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
            Appeal</Button>
            <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />


              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                    <Link to="/" className="w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Appeal
                  </Link>                
                </li>
              </ul>
            </li> 
          </ul>
        </li>
      </ul>
     </div>

    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={props.closeCategoryPanel}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel;
