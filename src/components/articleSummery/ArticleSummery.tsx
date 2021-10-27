import React from 'react'
import style from './articleSummery.module.css'
interface Props{
    image:any,
    number:string,
    heading:string,
    text:string,
    imageLeft?:boolean,
    large?:boolean
}
const ArticleSummery:React.FC<Props> = ({image,number,heading,text,imageLeft,large}) => {
    return (
        <div className={`sm:flex mt-24 text-spartan ${style.container} h55vh ${!imageLeft ? 'flex-row-reverse ':''} ${!large ? 'md:w-5/6 w-full md:mx-auto':'w-full'}`}>
            <div className={`${large ?  `${style.image}`:'sm:w-3/6 w-full  '} `}>
                <img src={image} alt="article-image" className="w-full h-full" />
            </div>
            <div className={`${large ? 'sm:w-2/6 w-full mr-5':'sm:w-3/6 w-full'}`}>
                <div className={`relative ${(!large && imageLeft) ? `${style.bgText} text-center`:`${style.bgText}`}`}>
                    <div>
                         <p className={style.numberText}> {number}</p>
                   </div>
                    <h2 className={`absolute ${(!large && imageLeft) ? `${style.number}`:'sm:left-0 left-1/4'}`}>{heading}</h2>
                </div>
                <p className={(!large && imageLeft) ? `${style.text}`:`${style.textlarge}`}>{text}</p>
                <div className={(!large && imageLeft) ? `${style.link} ${style.numberText}`:` ${style.numberText} ${style.linklarge}`}>
                    <a href="#" className="">READ MORE</a>
                </div>
            </div>
        </div>
    )
}

export default ArticleSummery
