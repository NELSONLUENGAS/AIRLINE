import React, { useState } from 'react';
import '../../Scss/components/Home/Home.scss';
import fondo from '../../images/fondo.jpg';
import Menu from '../Menu/Menu';
import Form from '../Form/Form';

export default function Home(){
    const [ state , setState]= useState({
        airline: '',
        form: false
    })
    let { airline, form } = state;
    function expandForm(event, info){
        event.preventDefault();
        setState(info);
    }


    return(
        <div className="homeContainer" >
            <div className='homeElement1' id='home'>
                <div>
                    <Menu
                        expand={expandForm}
                    />
                </div>
                {!form && <p>Volar nunca fué tan fácil</p>}
                <img src={fondo} alt="fondo" />
            </div>
            <div className='homeElement2'>
                <Form
                    airline={airline}
                    form={form}
                    expand={expandForm}
                />
            </div>
        </div>
    )
}