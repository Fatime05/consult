import React from 'react'
import style from './Blog.module.css'
const Blog = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
        <div className={style.text}>
            <h1>OUR LATEST BLOG</h1>
            <div className={style.title}></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>

        <div className={style.itemContainer}>
        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="" />
            <div className={style.titl}>
                <h1>Playback: Akufo-Addo speaks to business community</h1>
                
                <h3>Posted by admin at 04 Feb, 2017</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
            </div>
        </div>

        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg" alt="" />
            <div className={style.titl}>
                <h1>Playback: Akufo-Addo speaks to business community</h1>
                
                <h3>Posted by admin at 04 Feb, 2017</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
            </div>
        </div>

        <div className={style.item}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg" alt="" />
            <div className={style.titl}>
                <h1>Playback: Akufo-Addo speaks to business community</h1>
                
                <h3>Posted by admin at 04 Feb, 2017</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Blog