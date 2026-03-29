import React from 'react';
import Cart from '../Cart/Cart';
import AiModels from '../AiModels/AiModels';
import { toast } from 'react-toastify';

const SelectedCarts = ({subscribeCart, setSubscribeCart}) => {
    const totalPrice = subscribeCart.reduce((sum, item) => sum + item.price, 0);  
    const handlePayment = () => {
        setSubscribeCart([]);
        toast.success("Payment Successful!")
    }


    return (
        <div className='max-w-4xl mx-auto'>
            <div className='mt-6'>
            <h3 className='text-4xl font-bold'>Your Cart
            </h3>
            </div>
            {
                subscribeCart.length === 0 ? <p className='text-center text-3xl text-[#13131360] py-16 font-semibold'>Cart is Empty</p> : <>
                
            <div className='space-y-5 py-8'>
                {
                    subscribeCart.map(cart => <Cart key={cart.id} cart={cart} subscribeCart={subscribeCart} setSubscribeCart={setSubscribeCart}></Cart>)
                }
            </div>

            <div className='flex justify-between bg-black text-white p-10 my-6 rounded-3xl'>
                <h3 className='text-3xl font-bold'>Total</h3>
                <h4 className='text-3xl font-bold'>$ {totalPrice}</h4>
            </div>

            <div className='my-8'>
                <button onClick={handlePayment} className='btn w-full bg-red-500 text-3xl font-bold p-8 rounded-3xl text-white'>Proceed to Checkout</button>
            </div>
                </>
            }

            
        </div>
    );
};

export default SelectedCarts;