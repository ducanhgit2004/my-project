import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ProductZoom  from "../../components/ProductZoom"
import Rating from '@mui/material/Rating'
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";


const ProductDetails = () => {

    const[productActionIndex, setProductActionIndex] = useState(null);
    const[activeTab, setActiveTab] = useState(0);

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
       <div className="container flex gap-8 items-center">
            <div className="productZoomContainer w-[40%] ">
                <ProductZoom/>
            </div>

             <div className="productContent w-[60%] pr-10">
              <h1 className="text-[25px] font-[700] mb-2">Quần giả váy xếp ly nhãn hiệu Juno | Quần thời trang
                cao cấp | Quần nữ
              </h1>
              <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-[15px]">
                    Brands:  <span className="font-[500] text-black opacity-75">  Juno</span>
                    </span>


                  <Rating name="size-small" defaultValue={2} size="small" readOnly />
                  <span className="text-[13px] cursor-pointer ">Review (5)</span>

              </div>
              <div className="flex items-center gap-4 mt-4">
            <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">$58.00</span>
            <span className="price text-[#ff5252] font-[600] text-[20px]">$30.00</span>

            <span className="text-[14px]">Available In Stock : <span className="text-green-600
            text-[14px] font-bold"> 147 Items</span></span>
          </div>

            <p className="mt-3 pr-10 mb-5">
              - Quần giả váy xếp ly đẹp, tạo hiệu ứng chuyển động nhẹ nhàng và tôn dáng.<br/>

              - Chất liệu mềm mại, thoáng nhẹ, mang lại cảm giác dễ chịu khi mặc cả ngày.<br/>

              - Form váy gọn gàng, dễ phối cùng áo thun, sơ mi hoặc croptop.<br/>

              - Kích thước váy: S - M - L - XL<br/>

              - Chiều dài:<br/>

              S: 31cm - M: 32cm - L: 33cm - XL: 34cm <br/>
            </p>

            <div className="flex items-center gap-3">
                <span className="text-[16px]">Size:</span>
                <div className="flex items-center gap-1 actions">
                    <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white':''}`} 
                    onClick={()=>setProductActionIndex(0)}>S</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white':''}`} 
                    onClick={()=>setProductActionIndex(1)}>M</Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white':''}`} 
                    onClick={()=>setProductActionIndex(2)}>L</Button>
                    <Button className={`${productActionIndex === 3 ? '!bg-[#ff5252] !text-white':''}`} 
                    onClick={()=>setProductActionIndex(3)}>XL</Button>
                </div>
            </div>


          <p className="text-[14px] mt-4 mb-2">FreeShipping (Est. Delivery Time 2-3 Days)</p>
            <div className="flex items-center  gap-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox/>
              </div>
            

            <Button className="btn-org flex gap-2">
              <MdOutlineShoppingCart className="text-[22px]"/> 
            Add to Cart </Button>
            </div>

             <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 font-[15px] 
              link cursor-pointer font-[500]"><FaRegHeart className="text-[18px]"/> Add to Wishlist</span>

               <span className="flex items-center gap-2 font-[15px] 
              link cursor-pointer font-[500]"><IoIosGitCompare className="text-[18px]"/> Add to Compare</span>

            </div>


        

          </div>
        </div>

      <div className="container pt-12">
        <div className="flex items-center gap-8 mb-5">
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 && 'text-[#ff5252]'}`} onClick={()=>setActiveTab(0)}>Description        
          </span>
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 && 'text-[#ff5252]'}`}  onClick={()=>setActiveTab(1)}>Product Details        
          </span>
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 && 'text-[#ff5252]'}`}  onClick={()=>setActiveTab(2)}>Review (5)        
          </span>
        </div>

        {
          activeTab === 0 && (

          <div className="shadow-md w-full py-5 px-8 p-8 rounded-md">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English.</p>

          <h4>Lightweight Design</h4>

          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
             sometimes by accident, sometimes on purpose</p>

          <h4>Free Shipping & Return</h4>

          <p>We offer free shipping for products on orders above 50$ and free delivery 
            in Nam Dinh</p>   

          <h4>Money Back Guarantee</h4>
          <p>We guarantee our products and you could get back all of your money 
            anytime</p>

          <h4>Online Support</h4>
          <p>You will 24 hours support with this purchase product</p>    

        </div>

        )}



       {
        activeTab === 1 && (
          <div className="shadow-md w-full py-5 px-8 p-8 rounded-md">
          <div className="relative overflow-x-auto shadow-md rounded-lg border border-[rgba(0,0,0,0.1)]">
            <table className="w-full text-sm text-left text-gray-500">
              <tbody>

                <tr className="border-b">
                  <th className="px-6 py-4 w-[30%] bg-gray-50 text-black font-semibold">
                    Product Name
                  </th>
                  <td className="px-6 py-4">
                    Juno Pleated Skort for Women
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Brand
                  </th>
                  <td className="px-6 py-4">
                    Juno
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Category
                  </th>
                  <td className="px-6 py-4">
                    Women’s Fashion / Skirts
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Material
                  </th>
                  <td className="px-6 py-4">
                    Premium stretch khaki fabric
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Color
                  </th>
                  <td className="px-6 py-4">
                    Black
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Size
                  </th>
                  <td className="px-6 py-4">
                    S, M, L, XL
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Style
                  </th>
                  <td className="px-6 py-4">
                    Elegant, Korean Style, Casual
                  </td>
                </tr>

                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-black font-semibold">
                    Origin
                  </th>
                  <td className="px-6 py-4">
                    Vietnam
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          </div>
        )}

        {
          activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden
                mt-5">
                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img src="/anhatinh.jpg" className="w-full"/>
                      </div>

                    <div className="w-[80%]">
                      <h4 className="text-[16px]">hoangtu 29c1</h4>
                      <h5 className="text-[13px] mb-0">13-5-2025</h5>
                      <p className="!mt-0 !mb-0">toi noi vay thi ae ok di</p>
                    </div>

                    </div>
                    <Rating name="size-small" defaultValue={2} readOnly />

                  </div>
                  
                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img src="/anhatinh.jpg" className="w-full"/>
                      </div>

                    <div className="w-[80%]">
                      <h4 className="text-[16px]">hoangtu 29c1</h4>
                      <h5 className="text-[13px] mb-0">13-5-2025</h5>
                      <p className="!mt-0 !mb-0">toi noi vay thi ae ok di</p>
                    </div>

                    </div>
                    <Rating name="size-small" defaultValue={2} readOnly />

                  </div>


                 
                </div>
              </div>
            </div>
  )
}

        
      </div>
    </section>
    </>
  )
}

export default ProductDetails
