import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
interface Props{
    current:number,
    total:number,
    next:()=>void,
    prev:()=>void
}
const SliderButton:React.FC<Props>= ({current,total,next,prev}) => {
    return (
        <div className="absolute flex bottom-0.5 lg:text-base text-2xl">
            <div className="mt-p5 cursor-pointer" onClick={prev}>
            <AiOutlineLeft  />
            </div>
            <span className="ml-2 mr-2 "><span className="text-my2color font-medium">{current}</span>/{total}</span>
            <div  className="mt-p5 cursor-pointer" onClick={next}>
            <AiOutlineRight />
            </div>
        </div>
    )
}

export default SliderButton
