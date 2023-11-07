import React from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { Button } from './ui/Button';

const FacebookButton = () => {
  console.log(process.env.REACT_APP_FB_APP_ID);
    return (
        <LoginSocialFacebook
            isOnlyGetToken={true}
            appId={`${process.env.REACT_APP_FB_APP_ID}`}
            onLoginStart={() => alert("facebook login")}
            onResolve={({ provider, data }) => {
              console.log(provider, data);
            }}
            onReject={(err) => {
              console.log(err)
            }}
        > 
            <Button
                type="button"
                variant="facebook"
                title="facebook button"
                className="rounded-full"
                width="full"
            >
                Login in with Facebook
            </Button>
        </LoginSocialFacebook>
  )
}

export default FacebookButton