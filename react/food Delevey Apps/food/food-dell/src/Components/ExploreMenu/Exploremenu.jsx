import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='Exploremenu' id="Explore-menu">
        <h1>Explore Our Menu</h1>
        <p className='Explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and satisfying your cravings and elevate your dining experience.</p>
        <div className="Explore-menu-list">
         {menu_list.map((item,index)=>{
             return (
                <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Explore-menu-list-item'>
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                </div>
             )
         })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu