import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ToyDetails = () => {
    const {id} = useParams();
    const toyId = parseInt(id);
    const data = useLoaderData();
    const singleToy = data.find(toy => toy.toyId === toyId);
    // console.log(singleToy)
    const { toyName,pictureURL,rating,availableQuantity,price,sellerName,subCategory,sellerEmail,description } = singleToy
    return (
        <div>
             <section className='relative'>
        <div className='bg-base-300 h-[550px] w-[550px] my-10 ml-20 place-content-center place-items-center'>
            <img className='h-[400px]' src={pictureURL} alt="" srcset="" />
        </div>
        <div className='px-80 ml-100 absolute top-8 space-y-2 '>
        <p className='text-2xl font-bold'>{toyName}</p>
        <p><span className=' font-semibold'>Seller Name: </span>{sellerName}</p>
        <p><span className='font-bold'>Mail: </span>{sellerEmail}</p>
        <p><span className='font-semibold'>Category: </span>{subCategory}</p>
        <p className=''><span className='font-bold text-black'>Rating: </span>{rating}</p>
        <p><span className='font-bold'>Price: </span>{price}</p>
        <p><span  className='font-bold'>Available Quantities: </span>{availableQuantity}</p>
        <p><span className='font-bold'>Description: </span>{description}</p>
        <button class="btn btn-neutral">Buy now</button>
        </div>
        </section>
        </div>
    );
};

export default ToyDetails;