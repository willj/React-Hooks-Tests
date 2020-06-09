import React from 'react';
import './App.css';
import Counter from './hooks/counter';
import Variants from './hooks/Variants';
import SignUp from './hooks/SignUp';
import Quote from './hooks/Quote';
import Foaas from './hooks/Foaas';

import Identity from './identity/Identity';
import LoginStatus from './identity/LoginStatus';
import IdentitySample from './hooks/IdentitySample';

function App() {
  return (
    <div className="App">
        <Identity>
          <LoginStatus />

          <Counter startNum={10} />

          <Variants />

          <SignUp />

          <Quote />

          <Foaas />

          <IdentitySample />

        </Identity>
    </div>
  );
}

export default App;
