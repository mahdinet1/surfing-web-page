import React from 'react'
interface Props {
    title:string,
    url:string,
    class1?:string,
    class2?:string
}
const NavItem:React.FC<Props> = ({title,url,class1='',class2=''}) => {
    return (
        <li className={`margin-left-3p sm:mb-0 mb-4 ${class1}  `} >
            <a href="url" className={`text-gray-500 hover:text-black ${class2}`} > 
                {title}
            </a>
        </li>
    )
}

export default NavItem
