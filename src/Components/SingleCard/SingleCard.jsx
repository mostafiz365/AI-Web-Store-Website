import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleCard = ({card, subscribeCart, setSubscribeCart}) => {

    const [isSubscribe, setIsSubscribe] = useState(false);

    const handleSubscribeBtn = () => {
        setIsSubscribe(true);

        const isFound = subscribeCart.find(cart => cart.id === card.id);
        if(isFound){
            toast.error(`${card.title} already added in cart!`);
            return;
        }


        setSubscribeCart([...subscribeCart, card]);
        toast.success(`${card.title} added in Cart`);
    }


    // console.log(card)
    return (
        <div className='shadow-lg rounded-3xl border overflow-hidden border-zinc-300'>
            <div className='flex justify-center items-center h-56 bg-zinc-200'>
                <img className='h-40 w-40 object-contain hover:scale-110 transition' src={card.image} alt="" />
            </div>
            <div className='p-4 space-y-4'>
                <h4 className='text-3xl font-semibold'>{card.title}</h4>
                <p className='text-[#13131360]'>{card.description}</p>
                <h5 className='text-3xl text-black font-semibold'>${card.price}<span className='text-[#13131360] font-normal'>/month</span></h5>
                <button onClick={handleSubscribeBtn} className='btn w-full bg-red-500 text-xl text-white font-bold rounded-2xl py-7'>{isSubscribe ? 'Subscribed' : 'Subscribe Now'}</button>
            </div>
        </div>
    );
};

export default SingleCard;