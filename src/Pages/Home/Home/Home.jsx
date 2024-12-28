import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Categori/Category";
import PopulerMeno from "../PopolerMeno/PopulerMeno";


const Home = () => {


    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopulerMeno></PopulerMeno>
        </div>
    );
};

export default Home;