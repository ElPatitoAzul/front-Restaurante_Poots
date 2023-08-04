import React from 'react'
import logo from '../../assets/img/logo.png'
import  './login.css'
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className='modal-dialog text-center'>
            <div className='col-sm-9 main-section'>
                <div className='modal-content'>
                    <div className='col-12 logotipo'>
                        <img src={logo} className='img-logo'/>
                    </div>
                    <form className='col-12'>
                        <div class="form-group col-auto">
                            <label for="user" className='lbluser'><FaUser></FaUser></label><br />
                            <input type="text" class=" txtuser"  placeholder='Usuario' aria-describedby="emailHelp"/>
                        </div>
                        <br />
                        <div class="form-group col-auto">
                            <label  className='lblpass'><FaLock></FaLock></label><br />
                            <input type="password" class=" txtpass" placeholder='Contraseña' id=""/>
                        </div>
                        <br />
                        
                        <div class="form-group col-auto">
                            <button type="submit" class="btn btn-danger  form-control btnLogin"> Iniciar Sesión</button>
                        </div>
                        <br />
                    </form>
                </div>
               
            </div>
    </div>
  )
}

export default Login