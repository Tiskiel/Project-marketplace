import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import style from './Categories.module.css'


const Categories = () => {
  return (
    <div>
        <h1>Choose your categories</h1>
        <Link to='/categories/manga' className={style.marginRight}>Manga</Link>
        <Link to='/categories/bd' className={style.marginRight}>BD</Link>
    </div>
  )
}

export default Categories;
