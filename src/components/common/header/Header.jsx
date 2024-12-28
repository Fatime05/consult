import React from 'react'
import style from './Header.module.css'
import { FaHeart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" />
            </div>

            <div className={style.navbar}>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">SKILL</a></li>
                    <li><a href="#">CLIENTS</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className={style.btn}><CiMenuBurger /></div>
            <div className={style.icon}>
                <Link to={"/wishlist"}><div className={style.heart}><FaHeart /></div></Link>
                <Link to={"/basket"}><div className={style.basket}>
            <MdLocalGroceryStore />
            </div></Link>
            </div>
            </div>
        </div>
  )
}

export default Header