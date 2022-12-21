import React from 'react';
import style from '../skill/Skill.module.css'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <h3>{props.title}</h3>
                <span className={style.description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default Skill;