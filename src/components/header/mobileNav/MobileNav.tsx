import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai'
import Modal from '../../modal/Modal'
import NavItems from '../navitems/NavItems'
const MobileNav:React.FC = () => {
    const [modal, setmodal] = useState<boolean>(false)
   
    const modalHandler = ()=>{
       
        setmodal(!modal)
        
    }
    

    return (
        <div className="ml-auto">
            <div className="text-3xl fixed top-8 right-3 z-10  cursor-pointer p-3" onClick={modalHandler}>{!modal ? <AiOutlineMenu />:<AiOutlineCloseCircle/>}</div>
            {
                modal && <Modal>
                    <NavItems class1="mb-link" class2="p-link link-color" class3="important-block" />
                </Modal>
            }
        </div>
    )
}

export default MobileNav
