import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import { Button } from '../ui/Button';
import CloseIcon from "../../assets/images/close.png";
import RegistrationForm from '../RegistrationForm';
import ForgotPasswordForm from '../ForgotPasswordForm';

const UserFormModal = ({ closeModal }) => {
  const [formToDisplay, getFormToDisplay] = useState("login");

  return (
    <div className='relative w-96 grid grid-cols-[1fr_max-content] items-start mt-6'>
      <blockquote className='bg-white w-full'>
        {/* Login Form */}
        {formToDisplay === "login" && (
          <LoginForm getFormToDisplay={getFormToDisplay} />
        )}

        {/* R egistration Form */}
        {formToDisplay === "register" && (
          <RegistrationForm getFormToDisplay={getFormToDisplay} />
        )}

        {/* Login Form */}
        {formToDisplay === "forgotPassword" && (
          <ForgotPasswordForm getFormToDisplay={getFormToDisplay} />
        )}
      </blockquote>

      {/* Close Button */}
      <Button 
        onClick={closeModal} 
        className="-mt-2"
      >
        <img 
          src={CloseIcon}
          alt="close user form modal"
          className="w-4 h-4"
        />
      </Button>
    </div>
  )
}

export default UserFormModal