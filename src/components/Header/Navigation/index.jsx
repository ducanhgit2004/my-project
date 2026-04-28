import React, { useState } from 'react'
import { Button } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';


const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };

    const closeCategoryPanel = () => {
        setIsOpenCatPanel(false);
    };


  return (
    <>
    <nav className='py-2'>
        <div className="container flex items-center justify-end">
            <div className="col_1 w-[20%]">
                <Button className="!text-black flex items-center gap-2 font-bold" onClick={openCategoryPanel} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <RiMenu2Fill className="text-[18px]" /> <span className="font-bold">Shop By Categories</span>
                    <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
                </Button>
            </div>

            <div className="col_2 w-[65%] ">
                <ul className="flex items-center gap-7 ">
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Home</Button>
                         </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Fashion</Button>
                         </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Electronics</Button></Link>
                    </li><li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Bags</Button></Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Footwear</Button></Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Groceries</Button></Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Beauty</Button></Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Wellness</Button></Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] ">
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                         hover:!text-[#ff5252]">Jewelley</Button></Link>
                    </li>
                </ul>
            </div>

            <div className="col_3 w-[15%]">
                <p className="text-[14px] font-500 flex items-center gap-3 mb-0 mt-0">
                    <GoRocket className="text-[18px]"/>Free International Delivery</p>
            </div>

        </div>
    </nav>
     
    <CategoryPanel closeCategoryPanel={closeCategoryPanel} isOpenCatPanel={isOpenCatPanel}/> 
    </>
  )
}

export default Navigation;
