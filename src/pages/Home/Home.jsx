import React from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../../components/Cards/Cards';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const toys = useLoaderData()
    console.log(toys)
    return (
        <div>
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