import React, { use } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const AiModels = ({aiModelsPromise, subscribeCart, setSubscribeCart}) => {
    const aiModels = use(aiModelsPromise);
    // console.log(aiModels);
    return (
        <div>
            <div className='text-center py-10'>
                <h3 className='text-5xl font-bold text-black'>Choose Your AI Model</h3>
                <p className='text-[#13131370]'>One subscription hives you access to all frontier AI models</p>
            </div>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto py-10'>
                {
                    aiModels.map(card => <SingleCard key={card.id} card={card} subscribeCart={subscribeCart} setSubscribeCart={setSubscribeCart}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AiModels;