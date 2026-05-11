import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from 'react'
import { Link } from "react-router-dom";
import ProductZoom  from "../../components/ProductZoom"
import Rating from '@mui/material/Rating'


const ProductDetails = () => {
  return (
    <>
      <div className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Fashion
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Quần giả váy xếp ly
          </Link>

          
        </Breadcrumbs>
      </div>



       

    </div>  

    <section className="bg-white py-5">
       <div className="container flex gap-8">
            <div className="productZoomContainer w-[40%] ">
                <ProductZoom/>
            </div>

             <div className="productContent w-[60%] ">
              <h1 className="text-[25px] font-[700] mb-2">Quần giả váy xếp ly</h1>
              <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-[15px]">
                    Brands:  <span className="font-[500] text-black opacity-75">  Juno</span>
                    </span>


                  <Rating name="size-small" defaultValue={2} size="small" readOnly />
                  <span className="text-[13px] cursor-pointer ">Review (5)</span>

              </div>
              <div className="flex items-center gap-4 mt-4">
            <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">$58.00</span>
            <span className="price text-[#ff5252] font-[600] text-[18px]">$30.00</span>
          </div>

          <br/>

            <p>
              - Quần giả váy xếp ly đẹp, tạo hiệu ứng chuyển động nhẹ nhàng và tôn dáng.<br/>

              - Chất liệu mềm mại, thoáng nhẹ, mang lại cảm giác dễ chịu khi mặc cả ngày.<br/>

              - Form váy gọn gàng, dễ phối cùng áo thun, sơ mi hoặc croptop.<br/>

              - Kích thước váy: S - M - L - XL<br/>

              - Chiều dài:<br/>

              S: 31cm - M: 32cm - L: 33cm - XL: 34cm <br/>
            </p>

          </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails
