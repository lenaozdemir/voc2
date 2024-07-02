import React, { useState } from "react";
import style from './wordCard.module.css'

const Translation = ({translation}) =>{

    const [hovered, setTranslation] = useState(false);

    return (
    <p className={style.translation}
    onMouseEnter={() => setTranslation(true)}
    onMouseLeave={() => setTranslation(false)}
    >
        {hovered ? translation : 'Show Tranclation'}
    </p>
    );
};

export default Translation;