import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assests/logo (1).png";

import {DropdownLoggedOut} from "../Elements/DropdownLoggedOut"
import { DropdownLoggedIn } from '../Elements/DropdownLoggedIn';
import { useCart } from '../../context/CartContexts';

export const Header = () => {
    const {cartList} = useCart();
   
    const [darkMode,setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [dropDown,setdropDown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));
    useEffect (() => {
        localStorage.setItem("darkMode",JSON.stringify(darkMode));
        if(darkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode])
    return (
      <header>      
          <nav className="bg-white dark:bg-gray-900">
              <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                  <Link to="/" className="flex items-center">
                      <img src={Logo} class="mr-3 h-10" alt="CodeBook Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                  </Link>
                  <div className="flex items-center relative">
                      <span onClick={() => setDark(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                
                      <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                      <span className="text-2xl bi bi-cart-fill relative">
                          <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                      </span>                    
                      </Link>
                      <span onClick={() => setdropDown(!dropDown)}className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                      {dropDown && (token ? <DropdownLoggedIn setdropDown={setdropDown}/>:<DropdownLoggedOut setdropDown={setdropDown}/>)}
                  </div>
              </div>
          </nav>
         
      </header>
    )
  }