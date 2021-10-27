import React, { useState } from 'react'
import ShopItem from '../shopItem/ShopItem'
import { data } from '../data'

const ShopItems:React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [products, setproducts] = useState(data)
    return (
        <div className="md:mt-16 sm:flex flex-wrap lg:flex-nowrap items-end h55vh ">
            {
                products.map(item=>{
                    return(
                        <ShopItem key={item.id} image={item.image} surfboardCat={item.categorie} name={item.title} price={item.price} pageUrl="#" />
                    )
                })
            }
           
        </div>
    )
}

export default ShopItems
