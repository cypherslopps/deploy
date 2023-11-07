import React, { useState } from 'react';
import UserImage from "../assets/svg/user.svg";
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import Icons from "./Icons";

const RegistrationForm = ({ getFormToDisplay }) => {
    const [registrationForm, setRegistrationForm] = useState({
        firstName: "",
        familyName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [firstNameError, setFirstNameError] = useState("");
    const [familyNameError, setFamilyNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setRegistrationForm({
            [name]: value
        })
    }
    return (
        <div className='w-full'>
            <header className='p-3 flex flex-col gap-y-3 pb-7 bg-grey-400 border-b border-app-border'>
                {/* Back Button */}
                <Button 
                    type="button" 
                    className="text-sm md:p-0 lg:p-0"
                    onClick={() => getFormToDisplay("login")}
                >
                    <Icons.ArrowLeft className='w-4 h-4' />
                    Back
                </Button>

                {/* Header Content */}
                <div className='flex flex-col items-center justify-center gap-y-1.5'>
                    <img 
                        src={UserImage}
                        alt="user auth"
                        loading="lazy"
                        className='h-16'
                    />
                    <h6 className='text-sm text-app-text'>Registration</h6>
                </div>
            </header>

            {/* Form */}
            <form className='px-4 py-6 grid gap-y-3.5'>
                <Input 
                    type="name"
                    name="text"
                    placeholder="*First name"
                    value={registrationForm.firstName}
                    onChange={handleChange}
                    error={firstNameError}
                />

                <Input 
                    type="name"
                    name="text"
                    placeholder="*Family name"
                    value={registrationForm.familyName}
                    onChange={handleChange}
                    error={familyNameError}
                />

                <Input 
                    type="email"
                    name="email"
                    placeholder="*Mail"
                    value={registrationForm.email}
                    onChange={handleChange}
                    error={emailError}
                />

                <Input 
                    type="password"
                    name="password"
                    placeholder="*Password"
                    value={registrationForm.password}
                    onChange={handleChange}
                    error={passwordError}
                />

                <Input 
                    type="password"
                    name="confirmPassword"
                    placeholder="*Password verification"
                    value={registrationForm.confirmPassword}
                    onChange={handleChange}
                    error={confirmpasswordError}
                />
                
                {/* Updated */}
                <label htmlFor='updates' className='flex items-center gap-x-1 text-app-text select-none'>
                    <Input 
                        type="checkbox"  
                        name="updates"
                        id="updates"
                        value={true}
                    />
                    Join our updates
                </label>

                <Button
                    variant="primary"
                    title="form submit button"
                    className="rounded-full"
                    width="full"
                >
                    Enrollment
                </Button>
            </form>
        </div>
    )
}

export default RegistrationForm