import React from 'react';
import './App.css';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import Background from './bg.jpg'

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App" slot="sign-in" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: '1800px 1800px'
      }}>
        <AmplifySignIn headerText="My company name here" hideSignUp />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
