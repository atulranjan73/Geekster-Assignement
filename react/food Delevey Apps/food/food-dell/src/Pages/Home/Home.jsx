import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownload from '../../Components/Mobile-App/AppDownload'
const Home = () => {

const [category,setcategory]=useState("All");

  return (
    <div>
       <Header></Header>
       <Exploremenu category={category} setcategory={setcategory}></Exploremenu>
       <Fooddisplay category={category}></Fooddisplay>
       <AppDownload/>
    </div>
  )
}

export default Home