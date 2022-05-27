import React, { useState } from 'react';
import '../../Scss/components/Form/Form.scss';
import { animateScroll as scroll} from 'react-scroll';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form({airline, form,expand}){
    const [ Form, setForm] = useState({
        email: '',
        fullname: '',
        lastname: '',
        age: '',
        phone: '',
    })
    let { email, fullname, lastname, age, phone } = Form;
    const notify = () => toast.success("“Tu información fue enviada con éxito, estaremos en contacto contigo",{
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        autoClose: 5000,
        transition: Bounce
    });
    const notifyError = () => toast.error("Todos los campos son obligatorios",{
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Bounce
    });

    function handleOnChange(event){
        const { name , value } = event.target;
        event.preventDefault();
        setForm({
            ...Form,
            [name]: value
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        const regexEmail = /\S+@\S+\.\S+/;
        if(regexEmail.test(email) && fullname.length > 2 && age > 17 && age < 101 && phone.length > 5  && phone.length < 15 && lastname.length > 2){
            notify()
            scroll.scrollTo(1, {duration: 700, })
            expand(event,{
                form: false
            })
            setForm({
                email: '',
                fullname: '',
                lastname: '',
                age: '',
                phone: '',
            })
            console.log(email, fullname, lastname, age, phone)
        }else if((fullname.length && fullname.length < 3)|| lastname.length < 3){
            const notify = () => toast.warn("Inserte un mobre y apellido correcto",{
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
                autoClose: 3000,
                transition: Bounce
            });
            notify()
        
        }else if(email.length && !regexEmail.test(email)){
            const notify = () => toast.warn("Correo incorrecto",{
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
                autoClose: 3000,
                transition: Bounce
            });
            notify()
        }
        else if((age.length && age < 18 )|| age > 100){
            const notify = () => toast.warn("Debes tener entre 18 y 100 años",{
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
                autoClose: 3000,
                transition: Bounce
            });
            notify()
        }else if( (phone.length && phone.length < 6 )|| phone.length > 15){
            const notify = () => toast.warn("Inserte un numero de telefono correcto",{
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
                autoClose: 3000,
                transition: Bounce
            });
            notify()
        }
        else{
            notifyError()
        }
    }


    return(
        <div className="formContainer" id='form'>
            <ToastContainer/>
            <div className='formItem1'>
                {form &&
                    <p>
                        <span>Hola, bienvenido, sabemos que quieres viajar en {airline}</span>
                        <span> por favor diligencia el siguiente formulario</span>
                    </p>
                }
            </div>
            {form && 
            <div className='formItem2'>
                <div className="formElement1">
                    <input type='text' placeholder='Nombres'  value={fullname} name='fullname' onChange={handleOnChange}/>
                </div>
                <div className="formElement1">
                    <input type='text' placeholder='Apellidos' value={lastname} name='lastname' onChange={handleOnChange}/>
                </div>
                <div className="formElement2">
                    <input type='email' placeholder='email' value={email} name='email' onChange={handleOnChange}/>
                </div>
                <div className="formElement3">
                    <input type='number' placeholder='telefono' value={phone} name='phone' onChange={handleOnChange}/>
                </div>
                <div className="formElement4">
                    <input type='number' min='0'  max='110' placeholder='edad' value={age} name='age' onChange={handleOnChange}/>
                </div>
                <br/>
                <button onClick={handleSubmit}>
                    Enviar
                </button>
            </div>}
        </div>
    )
}