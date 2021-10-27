import React from 'react'
import ShopItems from './shopItems/ShopItems'

const Shop:React.FC = () => {
    return (
        <div className="lg:mt-48 mt-8 h-full md:mb-0  mb-20">
            <div className="text-center text-spartan">
                <p className="text-my2color text-sm tracking-lg">SHOP</p>
                <h2 className="text-4xl text-gray-800">Surfboards</h2>
            </div>
            <ShopItems />
            <div className="text-center mt-20 text-spartan hover:text-blue-500 text-gray-700 text-xs">
                <a href="/" className="tracking-lg py-2.5 border-b border-blue-400 font-semibold">SHOW ALL</a>
            </div>
        </div>
    )
}

export default Shop
