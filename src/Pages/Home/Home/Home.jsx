import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Categori/Category";
import PopulerMeno from "../PopolerMeno/PopulerMeno";
import Future from "../Futured/Future";
import Tastimonials from "../Tastimonials/Tastimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopulerMeno></PopulerMeno>
      <Future></Future>
      <Tastimonials></Tastimonials>
    </div>
  );
};

export default Home;