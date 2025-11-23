import React from 'react';
import toy from "../../assets/toys-corner-logo-vector.jpg"
const Banner = () => {
    return (
             <div>
      <p class="text-center font-bold text-2xl py-10 bg-gray-400">About the campaign</p>
     <section class="bg-gray-400 flex mx-auto">
        <div class="">
            <img src={toy} class="ml-80 mb-20 rounded-2xl"/>
        </div>
        <div class="px-90 space-y-5 mt-15">
            <p class="gap-4 text-white">
               🏎️ Buckle up for a ride into fun, speed, and imagination! Our car toys are built for thrills, races, and epic adventures — from turbo-charged racers to mini off-road beasts. Each toy is crafted for durability, detail, and dynamic play, sparking curiosity and creativity in every child
            </p>
            
        </div>
     </section>
     <h3 class="text-2xl font-bold text-center py-10 bg[#CFF0DC] bg-gray-600">Our Impact</h3>
     <section class="bg[#CFF0DC] bg-gray-600 flex space-x-5 self-center place-content-center pb-12">
        
        <div class="bg-[#FFFFFF] w-80 h-40  rounded-xl place-items-center place-content-center">
            <p class="text-[#15803D] text-2xl font-semibold">500K+</p>
            <p class="text-gray-400 text-sm">Toys sold</p>
        </div>
        <div class="bg-[#FFFFFF] w-80 h-40 rounded-xl place-items-center place-content-center">
            <p class="text-[#15803D] text-2xl font-semibold">120K+</p>
            <p class="text-gray-400 text-sm">Community Involved</p>
        </div>
        <div class="bg-[#FFFFFF] w-80 h-40 rounded-xl place-items-center place-content-center">
            <p class="text-[#15803D] text-2xl font-semibold">30K+</p>
            <p class="text-gray-400 text-sm">Countries Reachend</p>
        </div>
     </section>
             </div>
       
    );
};

export default Banner;