import React, { use, useState } from 'react';
import States from './States';
import Cards from './Cards/Cards';
import CookingCard from './Cards/CookingCard';
import ReadyCard from './Cards/ReadyCard';
import { toast } from 'react-toastify';

const OrderContainer = ({ promise }) => {
    const data = use(promise)
    const [orders, setOrders] = useState(data)
    const [cookingItems, setCookingItems] = useState([])
    const [readyItems, setReadyItems] = useState([])
    const handleReadyItems =(ready)=> {
        console.log(ready)
        const newReady = [...readyItems, ready]
        setReadyItems(newReady)

        const remaining = cookingItems.filter(item => item.id !== ready.id)
        // console.log(remaining)
        // setReadyItems(remaining) 
        setCookingItems(remaining)
        const finish = orders.filter(done=>done.id !==ready.id)
        setOrders(finish)
    }
    const handleOrder = (order) => {
        
        const isExist = cookingItems.find(item => item.id == order.id)
        // console.log(isExist)
        if(isExist){
            toast.success('Order Already on Processing')
            return
        }
        
            const newCookingItems = [...cookingItems, order]
            
            setCookingItems(newCookingItems)
        
        // console.log(order)
    }
    
    return (
        <div className=''>

            <States readyItems={readyItems} cookingTotal = {cookingItems} order={orders}></States>
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
                            cookingItems.map(orderr => <CookingCard key={orderr.id} orderr={orderr} handleReadyItems={handleReadyItems}></CookingCard>)
                        }
                    </div>
                </div>
                <div className=' lg:col-span-5 space-y-10'>
                    <h1>Order Ready</h1>
                    <div className='shadow-2xl p-10 space-y-5'>
                        {
                            readyItems.map(ready => <ReadyCard ready={ready}></ReadyCard>)
                        }

                    </div>
                </div>
            </section>


        </div>
    );
};

export default OrderContainer;