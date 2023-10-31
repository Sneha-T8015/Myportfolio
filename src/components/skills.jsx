import React from 'react';
import figma from "../img/skills/figma-5.svg";
import html from "../img/skills/html-1.svg";
import css from "../img/skills/css-3.svg";
import sass from "../img/skills/sass-1.svg";
import mysql from "../img/skills/mysql-logo.svg";
import mongodb from "../img/skills/mongodb-icon-2.svg";
import tailwind from "../img/skills/tailwind-css-1.svg";
import php from "../img/skills/php-1.svg";
import react from "../img/skills/react-2.svg";
import js from "../img/skills/javascript-1.svg";

export default function Skills() {
  return (
    <div className="flex-wrap flex-row items-center flex justify-center  m-2">
     <div className='flex flex-row items-center justify-center '>
     
      <img src={html} alt="" className="w-24 m-2 lg:h-24 md:w-24 lg:w-150 h-24" />
      
      <img src={css} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150 " />
      <img src={sass} alt="" className="w-24 m-2 lg:h-24 md:w-24 lg:w-150 h-24" />
      <img src={figma} alt="" className="w-24 m-2 lg:h-24 md:w-24 lg:w-150 h-24" />
     </div>
     <div className='flex flex-row items-center justify-center'>
     <img src={php} alt="" className="w-24 m-2 lg:h-24 mt-12 md:w-24 h-24 lg:w-150 " />
      <img src={react} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150 " />
      <img src={mongodb} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150 " />
      <img src={js} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150 " />
     </div>
      <div className='flex flex-row items-center justify-center'>
      <img src={mysql} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150" />
      <img src={tailwind} alt="" className="w-24 m-2 lg:h-24 md:w-24 h-24 lg:w-150 " />
      </div>
    </div>
  );
}
