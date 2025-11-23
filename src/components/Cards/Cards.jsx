import React from 'react';
import star from "../../assets/fi_1828884.png"


const Cards = ({toy}) => {
    const { toyName,pictureURL,rating,availableQuantity,price } = toy
    return (
        <section className=''>
            <div className=' card p-4 bg-gray-200  space-y-1'>
                <img src={pictureURL} alt="" className='w-90 h-60'/>
                <h1 className='mt-2'>{toyName}</h1>
                <div className='flex justify-between '>
                    <p className='flex bg-gray-300 p-0.5 rounded-2xl place-items-center'><img src={star} className='h-4 mr-1' />{rating}</p>
                    <p>{price}</p>
                </div>
                <div className=' flex justify-between'>
                    <p>Available quantities: {availableQuantity}</p>
                    <button className='btn'>View more</button>
                </div>
            </div>
        </section>
    );
};

export default Cards;