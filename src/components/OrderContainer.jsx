import React, { use } from 'react';
import States from './States';
import Cards from './Cards/Cards';

const OrderContainer = ({ promise }) => {
    const orders = use(promise)
    console.log(orders)
    return (
        <div className=''>

            <States order={orders}></States>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12'>
                <div className=' lg:col-span-7'>
                    <h1 className='font-bold text-4xl'>Current Order</h1>
                    <div className='space-y-5'>
                        {
                            orders.map(item => <Cards key={item.id} order= {item}></Cards>)
                        }
                    </div>
                </div>
                <div className=' lg:col-span-5'>
                    cooking
                </div>
            </section>


        </div>
    );
};

export default OrderContainer;