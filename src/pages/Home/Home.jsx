import React from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../../components/Cards/Cards';
import Banner from '../../components/Banner/Banner';
import cari from "../../assets/04.-Hyper-Racer-X1-Rear-3-4-scaled.jpg"
import carii from "../../assets/yollowcar.jpg";
import cariii from "../../assets/bugatti-centodieci.jpg"

const Home = () => {
    const toys = useLoaderData()
    console.log(toys)
    return (
        <div>
          <div class="slider">
    <div class="slides">
      <div class="slide">
        <img src={cari} alt="1" />
        <div class="text-box-left">
        </div>
      </div>
      <div class="slide">
        <img src={carii} alt="2" />
        <div class="text-box-right">
        </div>
      </div>
      <div class="slide">
        <img src={cariii} alt="3" />
        <div class="text-box-right">
        </div>
      </div>
    </div>
  </div>
          
          <h1 className='text-2xl text-center py-5'>New collection of toys</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 mx-auto mb-10 '>
            {
                toys.map(toy => (
                    <Cards key={toy.toyId} toy={toy}></Cards>
                ))
            }
          </div>
          <Banner></Banner>
        </div>
    );
};

export default Home;