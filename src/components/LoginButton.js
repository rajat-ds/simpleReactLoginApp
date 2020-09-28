import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (

      <div>
            <header>
              <h1>
                 Welcome To Auth0 Demo App
              </h1>
            </header>
            <button onClick={() => loginWithRedirect()}>
              Log In
            </button>
      </div>
    )
  )
}

export default LoginButton
