import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext/AppContext";
export default function ProductCard({product}) {
  // let {wished,handleWishlist} = useContext(AppContext);
  let {wishlist,setWishlist} = useContext(AppContext);
  let [toggle,setToggle] = useState(false);
  let org;
  let handleWishlist = (prod)=>{
    org = wishlist.filter((prd)=>prd.id == prod.id);
    
    if(!toggle){
      console.log(prod);
      setWishlist([...wishlist, { ...prod,wished:true}]);
      
    }else{
      let newWishList = wishlist.filter((prd)=>prd.id !== prod.id);
      let deleteObj = wishlist.filter((prd)=>prd.id === prod.id);
      // console.log(deleteObj);
      setWishlist(newWishList);
    }
    setToggle(!toggle);
  }
  // console.log(wishlist);
  // console.log(org);
  


  return (
    <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
      <img src={product.image} className="h-64 mx-auto" />
      <Link to={`/product/${product.id}`}>
        <h3 className="mt-3">{product.title}</h3>
      </Link>

      <div className="mt-4 flex justify-between">
        <div>
          <p>$ {product.price}</p>
        </div>
        <div>
          <svg 
          
            xmlns="http://www.w3.org/2000/svg"
            fill={toggle ? 'red' : 'none'}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={()=>{handleWishlist(product)}}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
