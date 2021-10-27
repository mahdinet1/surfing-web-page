import React from 'react'
interface Props {
    image:any,
    surfboardCat:string,
    name:string,
    price:string,
    pageUrl:string
}

const ShopItem:React.FC<Props> = ({image,surfboardCat,name,price,pageUrl}) => {
    return (
        <div className="md:w-1/3 sm:w-3/6 w-4/5 md:h-full sm:h-1/3 h-23 flex items-end mb-8 ">
            <div className="w-3/5 bg-custom sm:h-2/3 h-2/6 md:h-2/4 relative text-spartan sm:mx-0 mx-auto">
                <div className="absolute bottom-10 cursor-pointer  w-full ">
                    <img src={image} alt="surfbord" className="w-full h300" />
                </div>
                <div className="absolute left-85 sm:top-1/4 -top-2/4 ">
                    <p className="tracking-widest text-xs text-gray-400">{surfboardCat}</p>
                    <h3 className="lg:text-2xl md:text-xl whitespace-nowrap text-gray-700">{name}</h3>
                    <p className="text-center mt-6 text-red-400 lg:text-xl text-lg">{price}</p>
                    <a href={pageUrl} className="text-center block text-sm hover:text-blue-400">BUY</a>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
