import React from "react";
import style from './input.module.css'

const Formİnput = () => {
    return(
    <div className={style.box}>
        <div className={style.inputbox}>
            <label htmlFor="word">Enter New English Word</label>
            <input className={style.input} type="text" placeholder="English" />
        </div>
        <div className={style.inputbox}>
            <label htmlFor="word">Enter Transcription</label>
            <input className={style.input} type="text" placeholder="Transcription" />
        </div>
        <div className={style.inputbox}>
            <label htmlFor="word">Enter Translation</label>
            <input className={style.input} type="text" placeholder="Russian" />
        </div>
        <button className={style.button}>Save</button>
    </div>
    )
}

export default Formİnput;