import React from 'react'
import style from './Team.module.css'
const Team = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
        <div className={style.text}>
            <h1>Meet our Team</h1>
            <div className={style.title}></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>

        <div className={style.itemContainer}>
        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="" />
            <div className={style.titl}>
                <h1>Gonzalez Gina</h1>
                <p>Web Developer</p>
            </div>
        </div>

        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="" />
            <div className={style.titl}>
                <h1>Holly Vinzencini</h1>
                <p>Media Partner</p>
            </div>
        </div>

        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="" />
            <div className={style.titl}>
                <h1>Ramirez Minita</h1>
                <p>Graphic Design</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Team