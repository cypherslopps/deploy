import React from 'react'
import { Button } from "./ui/Button";
import { useOffscreen } from '../providers';
import UserImage from "../assets/svg/user.svg";
import { cn } from '../lib/utils';

const UserFormIcon = ({ info, className }) => {
    const { setType, openOffscreen } = useOffscreen();
    
    const openUserFormModal = () => {
        // Set offscreen type
        setType("user-form-modal");
    
        // Toggle modal
        openOffscreen();
      }

    return (
        <Button 
            onClick={openUserFormModal}
            className={cn("select-none rounded-none", className)}
        >
            {info && <span className='text-[.82rem] md:text-[.84rem]'>{info}</span>}
            <img 
                src={UserImage}
                alt="user auth"
                loading="lazy"
                className='h-[1.4rem] lg:h-6'
            />
        </Button>
  )
}

export default UserFormIcon