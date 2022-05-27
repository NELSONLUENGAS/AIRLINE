import React, { useState } from 'react';
import { Items } from '../../Data/Data';
import '../../Scss/components/Menu/Menu.scss';
import { Link } from 'react-scroll';
import { HiMenu } from "react-icons/hi";

export default function Menu({expand}){
    const [ expandMenu, setExpandMenu ] = useState(true)
    function handleOnClick(event){
        const { title } = event.target
        setExpandMenu(true)
        expand(event, {
            airline: title,
            form: true
        })
    }
    function handleOnTouch(event){
        const { title } = event.targetTouches
        setExpandMenu(true)
        expand(event, {
            airline: title,
            form: true
        })
    }
    function handleExpandMenu(event){
        event.preventDefault();
        setExpandMenu(!expandMenu)
    }
    // 
    return(
        <div className='menuContainer' id='menu'>
            <div className='menuElement1'>
                <span>AIRLINE</span>
            </div>
            {expandMenu ? 
                <div className='menuElement2'>
                    {Items.length  && Items.map(item =>
                        <Link key={item.name} to='form' smooth={true} duration={1500} offset={-30}>
                            <li onTouchStart={handleOnTouch} onClick={handleOnClick}  title={item.name}>{item.name}</li>
                        </Link>
                    )}
                </div>
            :
                <div className='menuElement2_1'>
                    {Items.length  && Items.map(item =>
                        <Link key={item.name} to='form' smooth={true} duration={1500} offset={-30}>
                            <li onTouchStart={handleOnTouch} onClick={handleOnClick}  title={item.name}>{item.name}</li>
                        </Link>
                    )}
                </div>
            }
            <div className='menuElement3'>
                <button onClick={handleExpandMenu}>
                    <HiMenu/>
                </button>
            </div>
        </div>
    )
}