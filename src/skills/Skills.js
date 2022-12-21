import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
           <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
               <h2 className={style.title}>Skills</h2>
               <div className={style.skills}>
                   <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi error eum laborum minus, neque nihil"}/>
                   <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eaque exercitationem explicabo fugiat, illo iste laboriosam magnam minus mollitia optio perferendis possimus quasi quibusdam, quidem saepe sint suscipit ullam velit."}/>
                   <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor eum fuga magni molestiae molestias nisi nobis non. Cum cupiditate explicabo illum reprehenderit sit. Animi aspernatur molestias neque possimus reiciendis!"}/>
               </div>
           </div>
        </div>
    );
};

export default Skills;