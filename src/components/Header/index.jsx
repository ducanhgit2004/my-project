import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            <div className="w-[50%]">
              <p className="text-[14px] font-[500]">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>

            <ul className="flex items-center gap-3">
              <li>
                <Link to="/help-center" className="text-[13px] font-[500] hover:text-red-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-[13px] font-[500] hover:text-red-500">
                  Order Tracking
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">

          <div className="col1 flex items-center w-[15%]">
            <Link to="/">
              <img
                src="/logo1.jpg"
                alt="logo"
                className="h-[100px] w-auto object-contain"
              />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3w-[30%] flex items-center">
            <ul className="flex items-center gap-4 justify-end w-full">
              <li>
                <Link to="/login" className="text-[15px] gap-3 font-[500] hover:text-red-500 ">
                  Login
                </Link>
                   | 
                <Link to="/register" className="text-[15px] gap-3 font-[500] hover:text-red-500">
                  Register
                </Link>
              </li>

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline size={24} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart size={24} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Shopping Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <MdOutlineShoppingCart size={24} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header