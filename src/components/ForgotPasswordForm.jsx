import React, { useState } from 'react';
import UserImage from "../assets/svg/user.svg";
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import Icons from "./Icons";

const ForgotPasswordForm = ({ getFormToDisplay }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

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
                    <h6 className='text-sm text-app-text'>שחזור סיסמה</h6>
                </div>
            </header>

            <div className='text-center text-app-text px-5 pt-6 pb-4 space-y-1'>
                <h5>שכחת את הסיסמה שלך?</h5>
                <p>במידה ונרשמת אצלנו בעבר - נוכל לשלוח לך קישור לאיפוס הסיסמה</p>
            </div>

            {/* Form */}
            <form className='px-5 pb-6 grid gap-y-3.5'>
                <Input 
                    type="email"
                    name="email"
                    placeholder="* מייל לשליחת סיסמה"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    error={emailError}
                />

                <Button
                    variant="primary"
                    title="form submit button"
                    className="rounded-full"
                    width="full"
                >
                    שליחה
                </Button>
            </form>
        </div>
    )
}

export default ForgotPasswordForm