import React from 'react'
import style from './input.module.css'
interface Props{
    type:string,
    plcHolder:string,
    value:string,
    change:(event: any)=>void
}
const InputBox:React.FC<Props> = ({type,plcHolder,value,change}) => {
    
    return (
        <>
         <input type={type} 
         placeholder={plcHolder} 
         className={`sm:w-5/6 w-11/12 h-9 bgf5 shadow-inner mt-5 focus:outline-none   ${style.input}`} 
         value={value}
         onChange={(event)=>change(event)}
         />   
        </>
    )
}

export default InputBox

