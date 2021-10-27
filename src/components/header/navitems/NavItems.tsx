import React, { useState } from 'react'
import NavItem from '../navitem/NavItem'
interface Props{
    class1?:string,
    class2?:string,
    class3?:string
}
const initialState = [
    {id:1,title:'STORIES',url:'#'},
    {id:2,title:'EVENTS',url:'#'},
    {id:3,title:'PLACES',url:'#'},
    {id:4,title:'BOARDS',url:'#'}
]
const NavItems:React.FC<Props> = ({class1,class2,class3}) => {
    //items can be dynamic
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [items, setitems] = useState<{id:number,title:string,url:string}[]>(initialState)
    return (
        <ul className={`sm:flex ${class3}`}>
            {items.map(item=>{
               return <NavItem key={item.id} title={item.title} url={item.url} class1={class1} class2={class2} />
            })}
        </ul>
    )
}

export default NavItems
