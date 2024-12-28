import React from 'react'
import style from './Bizpro.module.css'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaCamera } from "react-icons/fa";
import { RxColorWheel } from "react-icons/rx";
const Bizpro = () => {
  return (
    <div className={style.container}>
      <div   className={style.context}>
        <div className={style.text}>
            <h1>ABOUT OUR BIZPRO</h1>
            <div className={style.title}></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>
        

        <div className={style.item}>
            <div className={style.detal}>
                <div className={style.iconDiv}><HiOutlinePencilSquare />
                </div>
                <h1>PHOTOGRAPHY</h1>
                <p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button>More Details</button>
            </div>

            <div className={style.detal}>
                <div className={style.iconDiv}><FaCamera /></div>
                <h1>Digital Media</h1>
                <p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button>More Details</button>
            </div>

            <div className={style.detal}>
                <div className={style.iconDiv}><HiOutlinePencilSquare /></div>
                <h1>Online Marketing</h1>
                <p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button>More Details</button>
            </div>

            <div className={style.detal}>
                <div className={style.iconDiv}><RxColorWheel /></div>
                <h1>WEB DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button>More Details</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Bizpro