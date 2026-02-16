import React, { use, useState } from 'react';
import States from './States';
import Cards from './Cards/Cards';
import CookingCard from './Cards/CookingCard';

const OrderContainer = ({ promise }) => {
    const orders = use(promise)
    const [cookingItems, setCookingItems] = useState([])
    const handleOrder = (order) => {
        // console.log(order)
        const newCookingItems = [...cookingItems, order]
        setCookingItems(newCookingItems)
    }
    
    return (
        <div className=''>

            <States cookingTotal = {cookingItems} order={orders}></States>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12'>
                <div className=' lg:col-span-7'>
                    <h1 className='font-bold text-4xl'>Current Order</h1>
                    <div className='space-y-5'>
                        {
                            orders.map(item => <Cards key={item.id} order= {item} handleOrder={handleOrder}></Cards>)
                        }
                    </div>
                </div>
                <div className=' lg:col-span-5 space-y-10'>
                    <h1>Cooking Now</h1>
                    <div className='shadow-2xl space-y-5 p-10'>
                        {
                            cookingItems.map(orderr => <CookingCard key={orderr.id} orderr={orderr}></CookingCard>)
                        }
                    </div>
                </div>
                <div className=' lg:col-span-5 space-y-10'>
                    <div className='shadow-2xl p-10'>
                    <h1>Order Ready</h1>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default OrderContainer;