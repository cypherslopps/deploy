import React, { useState } from 'react';
import UserImage from "../assets/svg/user.svg";
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import FacebookButton from './FacebookButton';
import { Link } from 'react-router-dom';

const LoginForm = ({ getFormToDisplay }) => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setLoginForm({
            [name]: value
        })
    }
    return (
        <div className='w-full'>
            <header className='py-12 px-8 flex items-center justify-center bg-grey-400 border-b border-app-border'>
            <img 
                src={UserImage}
                alt="user auth"
                loading="lazy"
                className='h-16'
            />
            </header>

            {/* Form */}
            <form className='px-4 py-6 grid gap-y-3.5'>
            <Input 
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginForm.email}
                onChange={handleChange}
                error={emailError}
            />

            <Input 
                type="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleChange}
                error={passwordError}
            />

            {/* Form Action Buttons */}
            <div className='space-y-2 mt-1'>
                <Button
                variant="primary"
                title="form submit button"
                className="rounded-full"
                width="full"
                >
                Connecting
                </Button>

                {/* Facebook Login Button */}
                <FacebookButton />
            </div>

            {/* Form Question */}
            <div className='mx-auto mt-2'>
                <Link 
                    href="void(0)" 
                    className='text-app-text underline text-base'
                    onClick={() => getFormToDisplay("register")}
                >
                    Register
                </Link>
                <span className='text-base'>/</span>
                <Link 
                    href="void(0)" 
                    className='text-app-text underline text-base'
                    onClick={() => getFormToDisplay("forgotPassword")}
                >
                    forgot password?
                </Link>
            </div>
            </form>
        </div>
    )
}

export default LoginForm