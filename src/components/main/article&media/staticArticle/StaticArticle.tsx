import React from 'react'
import style from './staticArticle.module.css'
interface Props{
    imgUrl:any,
    url:string
}

const StaticArticle:React.FC<Props> = ({imgUrl,url}) => {
    return (
        <div className="sm:w-3/6 w-5/6 text-spartan lg:m-0 mx-auto mb-12">
            <div className="">
                <img src={imgUrl} alt="article image" />
            </div>
            <div className="w-2/3 flex flex-col  mx-auto mt-12 font-semibold">
                <p className="text-gray-400 text-base">By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                <a href={url} className={`tracking-lg font-normal  mt-8 uppercase text-sm ${style.link}`}>Read more</a>
                
            </div>
        </div>
    )
}

export default StaticArticle
