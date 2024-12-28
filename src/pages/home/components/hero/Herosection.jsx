import React from 'react'
import style from "./Herosection.module.css"
const Herosection = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.text}>
                <h1>HELLO WE'RE BIZPRO</h1>
                <p>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
                <button>SEE OUR PROJECTS</button>
            </div>
        </div>
    </div>
  )
}

export default Herosection