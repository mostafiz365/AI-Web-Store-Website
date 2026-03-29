import React from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({cart, subscribeCart, setSubscribeCart}) => {
    const handleDeleteCart = (deleteCart) => {
        const filterCart = subscribeCart.filter(c => c.id !== deleteCart.id)
        setSubscribeCart(filterCart);
        toast.error(`${cart.title} Delete in Cart!`)

    }


    return (
        <div>
            <div className='bg-gray-200 rounded-3xl grid grid-cols-12 justify-between items-center p-4 gap-3 border border-gray-300 hover:border-red-500'>
                <div className='col-span-2 rounded-3xl'>
                    <img className='w-30 h-30 object-contain' src={cart.image} alt="" />
                </div>
                <div className='col-span-7'>
                    <h4 className='text-2xl font-bold'>{cart.title}</h4>
                    <p>{cart.description}</p>
                </div>
                <div className='col-span-2'>
                    <h3 className='text-3xl font-bold text-right'>${cart.price}</h3>
                    <p className='text-[#13131370] text-right'>per month</p>
                </div>
                <div className='col-span-1 flex justify-end'>
                    <MdClose onClick={() => handleDeleteCart(cart)} />
                </div>
            </div>
        </div>
    );
};

export default Cart;