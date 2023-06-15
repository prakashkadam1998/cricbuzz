import React from 'react'
import cb_logo from '../../Images/cb_logo.svg';
import '../Home/Home.css'
export default function Login() {
    return (
        <div>

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid navbar-color">
                    <a class="navbar-brand  " href="/">
                        <img src={cb_logo} alt="Logo" width="90" height="34" class="d-inline-block align-text-top" />
                    </a>
                </div>
            </nav>

            <div className='m-5'>

                <h3 className='text-center'>Login / Sign Up</h3>
                <div className='text-center'>We will send OTP to your email id</div>
                <form className='text-center'>
                    <div className='pt-5 '><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg></span><input type='email' placeholder='Enter your Email id' autoFocus></input>
                    </div>
                    <div>
                        <input type='checkbox' ></input><span>I agree with the Terms of Use and Privacy Policy of Cricbuzz</span>
                    </div>
                    <div>
                        <button className='rounded '>Continue</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
